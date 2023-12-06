import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  bloc!: Bloc;
  updateForm!: FormGroup;
  idFoyer: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formB: FormBuilder,
    private blocService: BlocService,
    private foyerService: FoyerService
  ) { }

  ngOnInit() {
    if (this.route.paramMap.subscribe((paramMap) => (this.id = Number(paramMap.get('id'))))) {
      this.blocService.getBlocById(this.id).subscribe(
        (data: Bloc) => {
          console.log(data);
          this.bloc = data;
          this.updateForm = this.formB.group({
            nomBloc: [""],
            idFoyer: [""],
            capaciteBloc: [""]
          });
          this.updateForm.patchValue(data);
        }
      );
    }
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

  updateBloc() {
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
