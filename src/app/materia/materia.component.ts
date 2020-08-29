import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit, OnDestroy {
constructor(private route: ActivatedRoute) { }

  paramsSubscription: Subscription;
  materiaId: string;

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
