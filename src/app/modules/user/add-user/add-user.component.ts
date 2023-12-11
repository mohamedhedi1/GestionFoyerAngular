import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  showAdminForm: boolean = false;
  myForm: FormGroup;



  
  constructor(private router: Router,private fb: FormBuilder,private _userService:UserService) 
  {
    
    this.myForm = this.fb.group({
     
      firstname: ['', [Validators.pattern('[A-Za-z]+'), Validators.required]],
      lastname: ['', [Validators.pattern('[A-Za-z]+'), Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)]],
      role : ['ADMIN']
    
    });
  }

  showForm(formType: string) {
    if (formType === 'admin') {
      this.showAdminForm = true;
    }
  }



  onSubmit() {
    console.log(this.myForm.value)
   this._userService.addUser(this.myForm.value)
      .subscribe(response => {
        
        this.router.navigate(['/users']);
      }, error => {
        console.error('Erreur lors de l\'ajout de l\'admin:', error);
      });

    
    this.myForm.reset();
}


  navigateToEtudiantsAdd() {
   
    this.router.navigate(['/etudiants/add']);
  }
}
