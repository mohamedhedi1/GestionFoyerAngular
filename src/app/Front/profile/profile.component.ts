import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/models/etudiant';
import { Foyer } from 'src/app/core/models/foyer';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { FoyerService } from 'src/app/core/services/foyerService/foyer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private foyerService: EtudiantService, private router: Router ,
    private formB: FormBuilder,private route: ActivatedRoute,) { }
    email!: string;
    b!: any;
    id!:number;
    foyer!: Etudiant;
    updateForm!: FormGroup;
    
  ngOnInit() {

   
    this.b=JSON.parse(localStorage.getItem('user')!);
    if(this.b&&this.b.role=="ETUDIANT"){
    if (this.route.paramMap.subscribe((paramMap) => this.id = Number(paramMap.get('id')))) {
      this.foyerService.getEtudiantByEmail(this.b['email']).subscribe(
        (data: Etudiant) => {
       
          this.foyer = data;
          localStorage.setItem('etudiatCin',String(this.foyer.cin))
          
          this.updateForm = this.formB.group({
            nomEt: ['', Validators.required],
            prenomEt: ['', Validators.required],
            cin: ['', Validators.required],
            ecole: [''],
            dateNaissance: ['']

          });
          this.updateForm.patchValue(data);
        }

      )
        ,
        (error: any) => {
          console.error('Error fetching user by ID:', error);
        }
    }
  }else{
    this.router.navigateByUrl('/login');
  }
  }

  add(form: FormGroup ) {
    if (form.valid) {
      const etudiant: Etudiant = {
      idEtudiant: this.foyer.idEtudiant,
      nomEt: form.value.nomEt,
      prenomEt: form.value.prenomEt,
      cin: form.value.cin,
      email: this.b.email,
      ecole: form.value.ecole,
      dateNaissance: form.value.dateNaissance
      }
      this.foyerService.updateEtudiant(etudiant).subscribe(
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
