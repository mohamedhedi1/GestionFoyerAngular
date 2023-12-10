import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc';
import { BlocService } from 'src/app/core/services/blocService/bloc.service';
import { Foyer } from 'src/app/core/models/foyer';
import { FoyerService } from 'src/app/core/services/foyerService/foyer.service';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {
  foyers: Foyer[] = [];
  id!: number;
  foyer!: Foyer;
  bloc!: Bloc;
  updateForm!: FormGroup;
  idFoyer!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formB: FormBuilder,
    private blocService: BlocService,
    private foyerService: FoyerService
  ) { }

  ngOnInit() {
    this.updateForm = this.formB.group({
      idFoyer: [null, Validators.required],
      nomBloc: [null, [Validators.required, Validators.minLength(3)]],
      capaciteBloc: [null, [Validators.required, Validators.min(1)]],
    });

    this.route.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));

      this.blocService.getBlocById(this.id).subscribe(
        (data: Bloc) => {
          console.log(data);
          this.bloc = data;

          this.updateForm.patchValue({
            nomBloc: this.bloc.nomBloc,
            capaciteBloc: this.bloc.capaciteBloc,
          });
        },
        error => {
          console.error('Error fetching bloc:', error);
        }
      );
    });

    this.foyerService.getFoyerByIdBloc(this.id).subscribe(
      (data: Foyer) => {
        this.foyer = data;
        this.updateForm.patchValue({ idFoyer: data.idFoyer });
      },
      error => {
        console.error('Error fetching foyer ID:', error);
      }
    );

    this.foyerService.getall().subscribe(
      (foyers: Foyer[]) => {
        console.log(foyers);
        this.foyers = foyers;
      },
      (error: any) => {
        console.error('Error fetching foyers:', error);
      }
    );
  }

  hasError(controlName: string, errorName: string) {
    return this.updateForm.controls[controlName].hasError(errorName);
  }

  updateBloc() {
    if (this.updateForm.invalid) {
      console.error('Form is invalid. Please check for validation errors.');
      return;
    }

    this.bloc.idBloc = this.id;
    this.idFoyer = this.updateForm.value.idFoyer;
    this.bloc.capaciteBloc = this.updateForm.value.capaciteBloc;
    this.bloc.nomBloc = this.updateForm.value.nomBloc;

    this.blocService.updateBloc(this.bloc, this.idFoyer).subscribe(
      (response) => {
        alert('Bloc Updated Successfully!');
        this.router.navigate(['/listBloc']);
      },
      (error) => {
        console.error('Update failed:', error);
      }
    );
  }
}
