import { Component, OnInit, Input } from '@angular/core';
import { AulaCardModel } from 'src/app/object-model/aula-card-model';

@Component({
  selector: 'app-aula-card',
  templateUrl: './aula-card.component.html',
  styleUrls: ['./aula-card.component.css']
})
export class AulaCardComponent implements OnInit {

  constructor() { }

  @Input() objectAula: AulaCardModel;
  description: string = '';
  name:string = '';
  id:number;
  currentProgress:number;
  maxProgress:number;

  ngOnInit(): void {
    this.name = this.objectAula.name;
    this.description = this.objectAula.description;
    this.id = this.objectAula.id;
    this.currentProgress = this.objectAula.currentProgress;
    this.maxProgress = this.objectAula.maxProgress;
  }

}
