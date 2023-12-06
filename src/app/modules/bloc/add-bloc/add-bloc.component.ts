import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc';
import { BlocService } from 'src/app/core/services/blocService/bloc.service';
import { Foyer } from 'src/app/core/models/foyer';
import { FoyerService } from 'src/app/core/services/foyerService/foyer.service';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent implements OnInit {
  data: Bloc[] = [];
  foyers: Foyer[] = [];
  max: number = 50;
  constructor(private blocService: BlocService, private foyerservice: FoyerService, private router: Router) { }

  ngOnInit() {
    this.foyerservice.getall().subscribe(
      (foyers: Foyer[]) => {
        console.log(foyers);
        this.foyers = foyers;
      },
      (error: any) => {
        console.error('Error fetching foyers:', error);
      }
    );
  }

  add(form: NgForm) {
    if (form.valid) {
      const bloc: Bloc = {
        idBloc: 0,
        nomBloc: form.value.nom,
        capaciteBloc: Number(form.value.capacite),
      };
      this.blocService.addBloc(Number(form.value.foyer), bloc).subscribe(
        () => {
          alert('Added Successfully!');
          this.router.navigate(['listBloc']);
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}
