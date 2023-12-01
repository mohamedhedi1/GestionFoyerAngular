import { Component, OnInit } from '@angular/core';
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
  /*displayedColumns: string[] = ['Id', 'Nom', 'Prenom','Cin','Email','Ecole','dateNaissance','Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
*/

  constructor(private _userService: UserService,private _coreService: CoreService)
  {}


  getUserList() {
    //throw new Error('Method not implemented.');
    this._userService.getAllUsers().subscribe(
      {
        next : (res) => 
        {
          console.log(res);

        },
        error: (err) =>
        {
          console.log(err);
        }
      }
    )
    console.log("hello")
  }


}
