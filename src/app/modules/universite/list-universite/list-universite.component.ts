import { Universite } from './../../../core/models/Universite';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UniversiteService } from 'src/app/core/services/universiteService/universite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {

  data: Universite[]=[];
  universiteForm: FormGroup;


  constructor(private route: ActivatedRoute,
    private formB: FormBuilder,
    private universiteService:UniversiteService,
    private r:Router,
    private fb: FormBuilder

    ) {
      this.universiteForm = this.fb.group({
        nomUniversite: ['', [Validators.required, Validators.minLength(3)]],
        adresse: ['', [Validators.required, Validators.minLength(3)]],
    });

   }

  ngOnInit() {

    this.universiteService.getAll().subscribe(
      (data: Universite []) => {
        console.log(data);
         this.data=data;
      }),
      (error: any) => {
        console.error('Error fetching user by ID:', error);
      }

}
deleteUniversite(id :number){
 this.universiteService.deleteUniversite(id).subscribe(
   (response) => {
     alert('User deleted Successfully!');

     this.r.navigate(['listUniversite']);

   },
 )
}
}
