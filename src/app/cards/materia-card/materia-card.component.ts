import { Component, OnInit, Input } from '@angular/core';
import { MateriaCardModel } from 'src/app/object-model/materia-card-model';

@Component({
  selector: 'app-materia-card',
  templateUrl: './materia-card.component.html',
  styleUrls: ['./materia-card.component.css']
})
export class MateriaCardComponent implements OnInit {

  constructor() { }

  @Input() objectMateria: MateriaCardModel;
  descricao: string = '';
  nome:string = '';
  id:number;
  currentProgress:number;
  maxProgress:number;

  ngOnInit(): void {
    this.nome = this.objectMateria.name;
    this.descricao = this.objectMateria.description;
    this.id = this.objectMateria.id;
    this.currentProgress = this.objectMateria.currentProgress;
    this.maxProgress = this.objectMateria.maxProgress;
  }
  

}
