// add-universite.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Universite } from 'src/app/core/models/Universite';
import { Foyer } from 'src/app/core/models/foyer';
import { FoyerService } from './../../../core/services/foyerService/foyer.service';
import { UniversiteService } from '../../../core/services/universiteService/universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
  selectedFoyerId!: number;
  items: { nom: string, id: number }[] = [];

  constructor(
    private universiteService: UniversiteService,
    private router: Router,
    private foyerService: FoyerService
  ) {}

  ngOnInit() {
    this.fetchFoyers();
  }

  fetchFoyers() {
    this.foyerService.getall().subscribe(
      (data: Foyer[]) => {
        this.items = data.map((foyer: Foyer) => ({
          nom: foyer.nomFoyer,
          id: foyer.idFoyer
        }));
      },
      (error: any) => {
        console.error('Error fetching foyers:', error);
      }
    );
  }

  addUniversite(addForm: NgForm) {

      const universite: Universite = {
        nomUniversite: addForm.value.nomUniversite,
        adresse: addForm.value.adresse,
        foyer: {
          idFoyer: addForm.value.nomFoyer,
          nomFoyer: "",
          capaciteFoyer: 0 // You might want to remove this line if not needed
        },
        idUniversite: 0
      };
      console.log(universite)
      this.universiteService.addUniversite(universite).subscribe(
        () => {
          alert('University and Foyer association added Successfully!');
          this.router.navigate(['listUniversite']);
        },
        (error) => {
          console.error('Error adding university:', error);
        }
      );
    }
  }

