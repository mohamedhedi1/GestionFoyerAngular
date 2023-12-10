import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  b!: any;
  user: any;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

}
