import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/models/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  id!: string;
  myForm: FormGroup;
  etudiant! : Etudiant;


  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.getEtudiantById(Number(this.route.snapshot.paramMap.get('id')))
  }

  getEtudiantById(n: number)
  {
      this._etudiantService.getEtudiantById(n).subscribe(
      {
        next : (res)=>
        {
          console.log(res)
          this.etudiant = res;
          console.log(this.etudiant)
          this.myForm.patchValue({
            idEtudiant: this.etudiant.idEtudiant,
            nomEt: this.etudiant.nomEt,
            prenomEt: this.etudiant.prenomEt,
            cin: this.etudiant.cin,
            email: this.etudiant.email,
            ecole: this.etudiant.ecole,
            dateNaissance: this.etudiant.dateNaissance
          });
        },
        error: (err) =>
        {
          console.log(err);
        }
      })
        
  }
  

  constructor(private fb: FormBuilder,private _etudiantService: EtudiantService,private router: Router,private route: ActivatedRoute) {
    
    this.myForm = this.fb.group({
      idEtudiant :[''],
     
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
      this._etudiantService.updateEtudiant(this.myForm.value)
        .subscribe(response => {
          
          this.router.navigate(['/etudiants']);
        }, error => {
          console.error('Erreur lors de modification de l\'étudiant:', error);
        });
  
      
      this.myForm.reset();
  }
}
