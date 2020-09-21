import { Component, OnInit } from '@angular/core';
import { MateriaCardModel } from 'src/app/object-model/materia-card-model'
import { MateriaPageService} from 'src/app/materias-page/materia-page.service'

@Component({
  selector: 'app-materias-page',
  templateUrl: './materias-page.component.html',
  styleUrls: ['./materias-page.component.css']
})
export class MateriasPageComponent implements OnInit {

  constructor(private materiaPageService:MateriaPageService) { }

  postData: MateriaCardModel = new MateriaCardModel(88,'novoPostMateria','Materia Adicionada',45,99);

  materiaCards: MateriaCardModel[] = [new MateriaCardModel(4,'adicao','Como adicionar numeros', 0,20), new MateriaCardModel(5,'subtracao','como fazer uma subtracao', 7,54)];

  ngOnInit(): void {
  }

  postRequest():void {
    this.materiaPageService.createAndStoreMateria(this.postData).subscribe(responseData => {console.log(responseData);console.log(responseData[0].id)});
  }

  fetchRequest():void{
    this.materiaPageService.fetchMateria().subscribe(materia => {this.materiaCards = materia});
  }
  

}
