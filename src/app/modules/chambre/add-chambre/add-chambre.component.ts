import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChambreService } from 'src/app/core/services/chambre.service';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit {

  myForm: FormGroup;
  listBlocs : any;
  

  constructor(private fb: FormBuilder,private chambreService: ChambreService,private router: Router) {
    this.myForm = this.fb.group({
      numeroChambre: ['', [Validators.pattern('^[0-9][0-9]*$'), Validators.required]],
      typeC: ['' ],
      bloc: this.fb.group({
        idBloc: [''],
        nomBloc: [''],
        capaciteBloc: ['']
      })
      
    });
  }
  ngOnInit(): void {
    this.getBlocs()
  }

  getBlocs()
  { 
    this.chambreService.getBlocs().subscribe(
      {
        next : (res: any) => 
        {
          console.log(res);
          this.listBlocs= res
          
        },
        error: (err: any) =>
        {
          console.log(err);
        }
      }
    )

  }

  

 
    onSubmit() {
      console.log(this.myForm.value)
      this.chambreService.addChambre(this.myForm.value)
        .subscribe(response => {
          
          this.router.navigate(['/chambres']);
        }, error => {
          console.error('Erreur lors de l\'ajout de l\'chambre:', error);
        });
  
      
      this.myForm.reset();
  }
}
