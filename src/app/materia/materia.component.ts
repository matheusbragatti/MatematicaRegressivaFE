import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AulaCardModel } from 'src/app/object-model/aula-card-model'

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit, OnDestroy {
constructor(private route: ActivatedRoute) { }

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

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe;
  }
}
