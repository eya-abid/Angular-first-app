import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'Abid', 'Eya', 21, 'portrait in blue.jpg', 15, 'student'),
      new Personne(2, 'Omrane', 'Aymen', 26, 'tim_logo.png', 16, 'engineer')];
  }

  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
