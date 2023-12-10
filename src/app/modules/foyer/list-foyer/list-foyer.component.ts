import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer';
import { FoyerService } from 'src/app/core/services/foyerService/foyer.service';

@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.css']
})
export class ListFoyerComponent implements OnInit {
  data: Foyer[]=[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private formB: FormBuilder,
  private foyerService:FoyerService,) { }

  ngOnInit() {
   
       this.foyerService.getall().subscribe(
         (data: Foyer []) => {
           console.log(data);
            this.data=data;
         }),
         (error: any) => {
           console.error('Error fetching user by ID:', error);
         }
    
   }
   deleteFoyer(id :number){
    this.foyerService.deleteFoyer(id).subscribe(
      (response) => {
        alert('User deleted Successfully!');
       
        this.router.navigate(['listFoyer']);
  
      },
    )
   }
}
