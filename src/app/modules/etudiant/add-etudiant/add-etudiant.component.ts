import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent {
  myForm: FormGroup;
  

  constructor(private fb: FormBuilder,private _etudiantService: EtudiantService,private router: Router) {
    this.myForm = this.fb.group({
     
      nomEt: ['', [Validators.pattern('[A-Za-z]+'), Validators.required]],
      prenomEt: ['', [Validators.pattern('[A-Za-z]+'), Validators.required]],
      cin: ['', [Validators.pattern('[0-9]{8}'), Validators.required]],
      email: ['', [Validators.email]],
      ecole: ['',[Validators.pattern('[A-Za-z]+'), Validators.required]],
      dateNaissance: ['', [this.dateNaissanceValidator(18)]]
    });
  }

  dateNaissanceValidator(minYears: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const inputDate = new Date(control.value);
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() - minYears);
  
      if (inputDate >= currentDate) {
        return { 'dateNaissanceInvalid': { value: control.value } };
      }
  
      return null;
    };
  }

 
    onSubmit() {
      console.log(this.myForm.value)
      this._etudiantService.addEtudiant(this.myForm.value)
        .subscribe(response => {
          
          this.router.navigate(['/etudiants']);
        }, error => {
          console.error('Erreur lors de l\'ajout de l\'étudiant:', error);
        });
  
      
      this.myForm.reset();
  }
  
  
}