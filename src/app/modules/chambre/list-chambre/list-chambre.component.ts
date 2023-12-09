import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChambreService } from 'src/app/core/services/chambre.service';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.css']
})
export class ListChambreComponent implements OnInit{

  ngOnInit(): void {
    this.getChambreList();
  }
  displayedColumns: string[] = ['Id', 'numeroChambre', 'typeC','nomBloc','Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private chambreService: ChambreService,private _coreService: CoreService,private router:Router)
  {}


  getChambreList() {
    this.chambreService.getAllChambres().subscribe(
      {
        next : (res: any[] | undefined) => 
        {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

        },
        error: (err: any) =>
        {
          console.log(err);
        }
      }
    )
  }


  deleteChambre(id : number)
  {
    this.chambreService.deleteChambre(id).subscribe(
      {
        next: (res) => 
        {
          
          this._coreService.openSnackBar('Chambre deleted!', 'done');
          this.getChambreList()
        },
        error : console.log,

      }
    )
  }

  onEditClick(id : number)
  {
    this.router.navigate(['/chambres/update/'+id])
  }

  

    

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
