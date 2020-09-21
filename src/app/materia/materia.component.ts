import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AulaCardModel } from 'src/app/object-model/aula-card-model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MateriaService} from 'src/app/materia/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit, OnDestroy {
constructor(private route: ActivatedRoute, private http:HttpClient, private materiaService: MateriaService) { }


  postData: AulaCardModel = new AulaCardModel(21,'postdata','Nova aula',1,2);

  paramsSubscription: Subscription;
  materiaId: string;
  aulaCards: AulaCardModel[] = [new AulaCardModel(12,"primeira","descricao1",0,10), new AulaCardModel(542,"segunda","2Descricao",3,12), new AulaCardModel(12345,"Terceira","akjshdkjashdkjahsdkjahsdkjhaskjdhakjsdhkjashdjka",0,34)]

  ngOnInit(): void {
    this.materiaId = this.route.snapshot.params['materiaId'];
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.materiaId = params['materiaId'];
      }
    )
  }

  postRequest():void {
    this.materiaService.createAndStoreAula(this.postData).subscribe(responseData => {console.log(responseData);console.log(responseData[0].id)});
  }

  fetchRequest():void{
    this.materiaService.fetchAula().subscribe(aulas => {this.aulaCards = aulas});
  }


  ngOnDestroy() {
    this.paramsSubscription.unsubscribe;
  }
}
