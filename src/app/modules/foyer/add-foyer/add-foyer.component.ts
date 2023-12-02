import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer';
import { FoyerService } from 'src/app/core/services/foyerService/foyer.service';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent implements OnInit {
  constructor(private foyerService:FoyerService,private router:Router) { }

  ngOnInit() {
  }
    

   add(form: NgForm) {
   if(form.valid){
    const foyer: Foyer ={
      idFoyer:0,
      universite : form.value.universite,
      nomFoyer : form.value.nom,
      capaciteFoyer:Number(form.value.capacite),
    }
    this.foyerService.AddFoyer(foyer).subscribe(
      () => {
        alert('Added Successfully!');
        this.router.navigate(['listFoyer']);
      },
      error => {
        console.error(error);

      }
    );
   }
  }
}
