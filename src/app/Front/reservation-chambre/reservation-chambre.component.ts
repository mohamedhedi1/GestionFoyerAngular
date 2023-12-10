import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Chambre } from 'src/app/core/models/Chambre';
import { Reservation } from 'src/app/core/models/Reservation';
import { ChambreService } from 'src/app/core/services/chambre.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'app-reservation-chambre',
  templateUrl: './reservation-chambre.component.html',
  styleUrls: ['./reservation-chambre.component.css'],
})
export class ReservationChambreComponent {
  constructor(
    private chamberService: ChambreService,
    private router: Router,
    private formB: FormBuilder,
    private route: ActivatedRoute,
    private reservationservice: ReservationService
  ) {}
  updateForm!: FormGroup;
  id!:number;
  array!: any[];
  reservation!: Reservation[];

ngOnInit()  {
  this.reservationservice.getall().subscribe((data: Reservation[]) => {
    this.reservation = data;});
  this.route.paramMap.subscribe((paramMap) => this.id = Number(paramMap.get('id')))
  this.updateForm = this.formB.group({
    select: ['', Validators.required],
   

  });

  this.chamberService.gettAllValidChambersbyFoyer(this.id).subscribe((chambers: Chambre[]) => {
    this.array=chambers;
    const filteredChambers: Chambre[] = [];
      
    chambers.forEach((chamber) => {
      
      const reservationIdExists = this.reservation.some(reservation => {
        return chamber.numeroChambre === Number(reservation.idReservation.charAt(0)) && !reservation.estValide;
      });
        if(reservationIdExists){
        
          this.removeChambre(chamber);
        }
     
    });
   
     
    });


}
reserver(form:FormGroup){



    
    if (form.valid) {
      this.reservationservice.AddReservation( form.get('select')?.value ,localStorage.getItem('etudiatCin')!).subscribe(
        () => {
          alert('Added Successfully!');
         // this.router.navigate(['listFoyer']);
        },
        error => {
          alert('is full')

        }
      );
    }
  }

  /*
  ngOnInit() {
    this.reservationservice.getall().subscribe((data: Reservation[]) => {
      this.reservation = data;
      console.log('aaaaa', this.reservation);
  
      this.chamberService.getAllChambres().subscribe((chambers: Chambre[]) => {
        this.array=chambers;
        console.log(this.array)
        const filteredChambers: Chambre[] = [];
      
        chambers.forEach((chamber) => {
          
          const reservationIdExists = this.reservation.some(reservation => {
            return chamber.numeroChambre === Number(reservation.idReservation.charAt(0)) && !reservation.estValide;
          });
            if(reservationIdExists){
            
              this.removeChambre(chamber);
            }
         
        });
  
      
      });
    });
  }
  */
  removeChambre(chambreToRemove:any): void {
    if (chambreToRemove) {
      this.array = this.array.filter(chambre => chambre.idChambre !== chambreToRemove.idChambre);
      console.log(chambreToRemove+" deleted")
      chambreToRemove = null; 
      console.log(this.array)
      
    }
}

}
