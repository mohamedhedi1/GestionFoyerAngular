import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/core/models/etudiant';
import { CoreService } from 'src/app/core/services/core.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit{
  ngOnInit(): void {
   this.getEtudiantList();
  }
//  ['Id']
  displayedColumns: string[] = ['Id', 'Nom', 'Prenom','Cin','Email','Ecole','dateNaissance','Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:Router,private _etudiantService: EtudiantService,private _coreService: CoreService)
  {}


  getEtudiantList()
  {
    this._etudiantService.getAllEtudiants().subscribe(
      {
        next : (res)=>
        {
          console.log(res)
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => 
        {
          console.log(err);
        }
      }
    )

  }

  onEditClick(id: number) {
    
    this.router.navigate(['/etudiants/update/'+id]);
  }

  deleteEtudiant(id : number)
  {
    this._etudiantService.deleteEtudiant(id).subscribe(
      {
        next: (res) => 
        {
          
          this._coreService.openSnackBar('Etudiant deleted!', 'done');
          this.getEtudiantList();
        },
        error : console.log,

      }
    )
  }












  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
