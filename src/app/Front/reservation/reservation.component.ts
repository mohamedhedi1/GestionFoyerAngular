import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Etudiant } from '../../core/models/etudiant';
import { EtudiantService } from '../../core/services/etudiant.service';
import { UserService } from '../../core/services/user.service';
import { UniversiteService } from 'src/app/core/services/Universite.service';
import { Universite } from 'src/app/core/models/Universite';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  user!: Etudiant  
  id!: number;
  universites: Universite[] = [];
  b!:any;


  constructor(private userService: UserService, private etudiantService:EtudiantService, private router: Router,private universiteService:UniversiteService) { }

  ngOnInit() {
    this.b=JSON.parse(localStorage.getItem('user')!);
    this.getUniversite();
  }
  
  getUniversite() {
    this.universiteService.getAll().subscribe(
      (universites: Universite[]) => {
        this.universites = universites;
      },
      (error) => {
        console.error('Error fetching foyers:', error);
      }
    );
  }
}  
