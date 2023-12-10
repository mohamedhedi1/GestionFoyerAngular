import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc';
import { Chambre } from 'src/app/core/models/chambre';
import { ChambreService } from 'src/app/core/services/chambreService/chambre.service';
import { BlocService } from 'src/app/core/services/blocService/bloc.service';

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css'],
})
export class ListBlocComponent implements OnInit {
  blocs: Bloc[] = [];
  Chambres: Chambre[] = [];
  selectedBloc: Bloc | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formB: FormBuilder,
    private blocService: BlocService,
    private chambreService: ChambreService
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

  getchambresByIdBloc(id: number) {
    this.chambreService.getchambresByIdBloc(id).subscribe(
      (chambres: any) => {
        this.Chambres = chambres;
      },
      (error) => {
        console.error('Error fetching rooms:', error);
      }
    );
  }

  toggleRooms(bloc: Bloc) {
    if (this.selectedBloc && this.selectedBloc.idBloc === bloc.idBloc) {
      this.selectedBloc = null;
    } else {
      this.selectedBloc = bloc;
      this.getchambresByIdBloc(bloc.idBloc);
    }
  }
}
