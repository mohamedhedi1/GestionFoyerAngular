import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/services/core.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  ngOnInit(): void {
    this.getUserList();
  }
  displayedColumns: string[] = ['Id', 'Nom', 'Prenom','Email','Role','Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _userService: UserService,private _coreService: CoreService)
  {}


  getUserList() {
    this._userService.getAllUsers().subscribe(
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


  deleteUser(id : number)
  {
    this._userService.deleteUser(id).subscribe(
      {
        next: (res) => 
        {
          
          this._coreService.openSnackBar('User deleted!', 'done');
          this.getUserList();
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
