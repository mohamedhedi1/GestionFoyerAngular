import { Etudiant } from "./etudiant";

export class Reservation {
    idReservation !:String;
    anneeUniversitaire !:String ;
    estValide!:boolean;
    etudiants !: Etudiant[]
}
