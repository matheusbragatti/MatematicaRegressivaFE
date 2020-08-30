import { Component, OnInit } from '@angular/core';
import { MateriaCardModel } from 'src/app/object-model/materia-card-model'

@Component({
  selector: 'app-materias-page',
  templateUrl: './materias-page.component.html',
  styleUrls: ['./materias-page.component.css']
})
export class MateriasPageComponent implements OnInit {

  constructor() { }


  materiaCards: MateriaCardModel[] = [new MateriaCardModel(4,'adicao','Como adicionar numeros', 0,20), new MateriaCardModel(5,'subtracao','como fazer uma subtracao', 7,54)];

  ngOnInit(): void {
  }

}
