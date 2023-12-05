import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc';
import { BlocService } from 'src/app/core/services/blocService/bloc.service';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {
  data: Bloc[] = [];
  id!: number;
  bloc!: Bloc;
  updateForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formB: FormBuilder,
    private blocService: BlocService,
  ) { }

  ngOnInit() {
    if (this.route.paramMap.subscribe((paramMap) => (this.id = Number(paramMap.get('id'))))) {
      this.blocService.getBlocById(this.id).subscribe(
        (data: Bloc) => {
          console.log(data);
          this.bloc = data;
          this.updateForm = this.formB.group({
            nomBloc: [""],
            capaciteBloc: [""],
            foyer: [1],
          });
          this.updateForm.patchValue(data);
        }
      );
    }
    this.blocService.getAll().subscribe(
      (data: Bloc[]) => {
        console.log(data);
        this.data = data;
      },
      (error: any) => {
        console.error('Error fetching blocs:', error);
      }
    );
  }

  updateBloc() {
    this.bloc.idBloc = this.id;
    this.bloc.capaciteBloc = this.updateForm.value.capaciteBloc;
    this.bloc.nomBloc = this.updateForm.value.nomBloc;
    this.blocService.updateBloc(this.bloc).subscribe(
      (response) => {
        alert('Bloc Updated Successfully!');
        this.router.navigate(['mainBloc/listBloc']);
      },
      (error) => {
        console.error('Update failed:', error);
      }
    );
  }
}
