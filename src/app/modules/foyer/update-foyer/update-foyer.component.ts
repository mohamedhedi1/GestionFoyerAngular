import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer';
import { FoyerService } from 'src/app/core/services/foyerService/foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent implements OnInit {
  id!:number;
  foyer!:Foyer;
  updateForm!:FormGroup;
  constructor(  private route: ActivatedRoute,
    private router: Router,
    private formB: FormBuilder,
  private foyerService:FoyerService,
    
    ) { }

  ngOnInit() {
   if( this.route.paramMap.subscribe((paramMap) => this.id = Number(paramMap.get('id')))){
      this.foyerService.getFoyerById(this.id).subscribe(
        (data: Foyer) => {
          console.log(data);
          this.foyer = data;
          this.updateForm = this.formB.group({
            nomFoyer: [""],
            capaciteFoyer: [""],
            Universite:[1],
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
  
  updateFoyer(){
    this.foyer.idFoyer=this.id;
    this.foyer.capaciteFoyer=this.updateForm.value.capaciteFoyer;
    this.foyer.nomFoyer=this.updateForm.value.nomFoyer;
    this.foyer.universite=this.updateForm.value.Universite;
    this.foyerService.updateFoyer(this.foyer).subscribe(
    (response) => {
      alert('User Updated Successfully!');
      //console.log(this.user)
      this.router.navigate(['mainFoyer/listFoyer']);

    },
    (error) => {
      console.error('Update failed:', error);
    }
  );
  }
  

}
