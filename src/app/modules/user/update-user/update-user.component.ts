import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
 
  id!: string;
  myForm: FormGroup;
  user! : User;

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.getUserById(Number(this.route.snapshot.paramMap.get('id')))
  }
  getUserById(n: number) {
    this.userService.getUserById(n).subscribe(
      {
        next : (res) =>
        {
          console.log(res);
          this.user = res;
          this.myForm.patchValue({
            id: this.user.id,
            firstname : this.user.firstname,
            lastname : this.user.lastname,
            email : this.user.email




          });

        },
        error : (err : any) =>
        {
          console.log(err);
        }
      }
    )
    
  }

  constructor(private fb: FormBuilder,private userService: UserService,private router: Router,private route: ActivatedRoute) {

    this.myForm = this.fb.group({

      id : [''],
      firstname: ['', [Validators.pattern('[A-Za-z]+'), Validators.required]],
      lastname: ['', [Validators.pattern('[A-Za-z]+'), Validators.required]],
      email: ['', [Validators.email]],
      
    
    });

  }

  onSubmit() {
    console.log(this.myForm.value)
    this.userService.updateUser(this.myForm.value)
      .subscribe(response => {
        
        this.router.navigate(['/users']);
      }, error => {
        console.error('Erreur lors de modification de l\'user:', error);
      });

    
    this.myForm.reset();
}


}
