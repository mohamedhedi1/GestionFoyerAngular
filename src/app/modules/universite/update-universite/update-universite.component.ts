import { Universite } from './../../../core/models/Universite';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteService } from 'src/app/core/services/universiteService/universite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent implements OnInit {

  id!:number;
  universite!:Universite;
  updateForm!:FormGroup;
  constructor(  private route: ActivatedRoute,
    private router: Router,
    private formB: FormBuilder,
    private universiteService:UniversiteService,
    private fb: FormBuilder


    )
     { this.updateForm = this.fb.group({
      nomUniversite: ['', Validators.required], // Validators.required rend le champ obligatoire
      adresse: ['', Validators.required] // Vous pouvez ajouter d'autres validateurs si nécessaire
    });
  }

    ngOnInit() {
      if( this.route.paramMap.subscribe((paramMap) => this.id = Number(paramMap.get('id')))){
         this.universiteService.getUniversiteById(this.id).subscribe(
           (data: Universite) => {
             console.log(data);
             this.universite = data;
             this.updateForm = this.formB.group({
               nomUniversite: [""],
               adresse: [""],

             });
             this.updateForm.patchValue(data);
           }

           )
           ,
           (error: any) => {
             console.error('Error fetching user by ID:', error);
           }
      }
     }

     updateUniversite(){
       this.universite.idUniversite=this.id;
       this.universite.nomUniversite=this.updateForm.value.nomUniversite;
       this.universite.adresse=this.updateForm.value.adresse;

       this.universiteService.updateUniversite(this.universite).subscribe(
       (response) => {
         alert('User Updated Successfully!');
         //console.log(this.user)
         this.router.navigate(['mainUniversite/listUniversite']);

       },
       (error) => {
         console.error('Update failed:', error);
       }
     );
     }


   }
