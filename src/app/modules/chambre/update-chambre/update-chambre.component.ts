import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/core/models/chambre';
import { ChambreService } from 'src/app/core/services/chambre.service';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {
  listBlocs:  any;
  id!: string;
  chambreForm : FormGroup;
  chambre! : Chambre;

  ngOnInit(): void {
    this.getBlocs()
   this.getChambreById(Number(this.route.snapshot.paramMap.get('id')));
  }

  constructor(private fb: FormBuilder,private chambreService : ChambreService, private router: Router , private  route :ActivatedRoute )
  {
    this.chambreForm = this.fb.group({
      idChambre: [''],
      numeroChambre: ['', [Validators.pattern('^[0-9][0-9]*$'), Validators.required]],
      typeC: ['' ],
      bloc: this.fb.group({
        idBloc: [''],
        nomBloc: [''],
        capaciteBloc: ['']
      })
      
    });
  }
  
  getChambreById(n: number) {
    this.chambreService.getChambreById(n).subscribe({
        next: (res) => {
          console.log(res)
            this.chambre = res;
            this.chambreForm.patchValue({
                idChambre: this.chambre.idChambre,
                numeroChambre: this.chambre.numeroChambre,  // Corrected typo here
                typeC: this.chambre.TypeC,
            });
        },
        error: (err) => {
            console.log(err);
        }
    });
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

  

  onSubmit()
  {
    console.log(this.chambreForm.value)
    this.chambreService.updateChambre(this.chambreForm.value)
      .subscribe(response => {
        
        this.router.navigate(['/chambres']);
      }, error => {
        console.error('Erreur lors de l\'ajout de l\'chambre:', error);
      });

    
    this.chambreForm.reset();
}

  }

  

