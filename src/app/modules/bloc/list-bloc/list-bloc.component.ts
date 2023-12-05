import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc';
import { BlocService } from 'src/app/core/services/blocService/bloc.service';
import { Foyer } from 'src/app/core/models/foyer';
import { FoyerService } from 'src/app/core/services/foyerService/foyer.service';

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css'],
})
export class ListBlocComponent implements OnInit {
  blocs: Bloc[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formB: FormBuilder,
    private blocService: BlocService,
    private foyerService: FoyerService
  ) { }

  ngOnInit() {
    this.blocService.getAll().subscribe(
      (blocs: Bloc[]) => {
        console.log(blocs);
        this.blocs = blocs;
      },
      (error: any) => {
        console.error('Error fetching blocs:', error);
      }
    );
  }

  deleteBloc(id: number) {
    this.blocService.deleteBloc(id).subscribe(
      (response) => {
        alert('Bloc deleted Successfully!');
        this.router.navigate(['listBloc']);
      },
      (error) => {
        console.error('Error deleting bloc:', error);
      }
    );
  }
}
