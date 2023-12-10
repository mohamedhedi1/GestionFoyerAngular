import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/core/models/Reservation';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-listReservation',
  templateUrl: './listReservation.component.html',
  styleUrls: ['./listReservation.component.css']
})
export class ListReservationComponent implements OnInit {

  apiResponse: Reservation[] = [];
  newData: Reservation[] = [];

  constructor(private reservationservice: ReservationService) { }

  ngOnInit() {
    this.reservationservice.getall().subscribe(data => {
      this.apiResponse = data;
      this.newData = this.apiResponse.filter(item => item.etudiants.some(etudiant => etudiant.cin === Number(localStorage.getItem('etudiatCin'))));
      console.log(this.newData);
    });
  }

  generatePdf(): void {
    const pdf = new jsPDF();
    this.newData.forEach((reservation, index) => {
      // Title with colors
      pdf.setTextColor(0, 0, 255); // Blue text color
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.text(`Reservation ${index + 1}`, 10, 10 + index * 30);

      // Content
      pdf.setTextColor(0); // Reset text color to black
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(14);
      pdf.text(`Annee Universitaire: ${reservation.anneeUniversitaire}`, 10, 20 + index * 30);
      reservation.etudiants.forEach((etudiant, etudiantIndex) => {
        pdf.text(`Etudiant ${etudiantIndex + 1}: ${etudiant.nomEt} ${etudiant.prenomEt}`, 10, 30 + index * 30 + etudiantIndex * 10);
        pdf.text(`CIN: ${etudiant.cin}`, 10, 35 + index * 30 + etudiantIndex * 10);
      });

      pdf.setLineWidth(0.5);
      pdf.line(10, 40 + index * 30 + reservation.etudiants.length * 10, 200, 40 + index * 30 + reservation.etudiants.length * 10);
    });

    // Fake Signature in the footer
    pdf.setTextColor(255, 0, 0); // Red text color for the signature
    pdf.setFontSize(12);
    pdf.text('Fake Signature', 100, pdf.internal.pageSize.height - 10, { align: 'center' });

    pdf.save('student_information.pdf');
  }

  deleteFoyer(id: String): void {
    // Display a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this reservation?');

    // If the user confirms, proceed with deletion
    if (isConfirmed) {
      // Find the index of the item with the specified ID in the newData array
      const index = this.newData.findIndex(item => item.idReservation === id);

      // If the item is found, remove it from the array
      if (index !== -1) {
        this.newData.splice(index, 1);
      }
    }
  }

  extractPdf(idReservation: String): void {
    const selectedReservation = this.newData.find(reservation => reservation.idReservation === idReservation);

    if (selectedReservation) {
      const pdf = new jsPDF();
      pdf.setTextColor(0, 0, 255); // Blue text color
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(16);
      pdf.text(`Reservation ID: ${selectedReservation.idReservation}`, 10, 10);
      pdf.setFontSize(14);
      pdf.text(`Annee Universitaire: ${selectedReservation.anneeUniversitaire}`, 10, 20);

      pdf.setFontSize(12);
      selectedReservation.etudiants.forEach((etudiant, etudiantIndex) => {
        pdf.text(`Etudiant ${etudiantIndex + 1}: ${etudiant.nomEt} ${etudiant.prenomEt}`, 10, 30 + etudiantIndex * 20);
        pdf.text(`CIN: ${etudiant.cin}`, 10, 40 + etudiantIndex * 20);
      });

      pdf.save(`reservation_${idReservation}.pdf`);
    } else {
      console.error(`Reservation with ID ${idReservation} not found.`);
    }
  }
}
