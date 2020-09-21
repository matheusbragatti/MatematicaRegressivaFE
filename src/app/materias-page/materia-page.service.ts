import {Injectable} from '@angular/core';
import { MateriaCardModel } from '../object-model/materia-card-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({providedIn: 'root'})
export class MateriaPageService{

    constructor(private http:HttpClient){}

    createAndStoreMateria(materia: MateriaCardModel){
        return this.http.post<MateriaCardModel>('/api/materiaCard',materia);
    }

    fetchMateria(){
        return this.http.get<MateriaCardModel[]>('/api/materiaCard').pipe(map(
            responseData => {const materiaArray: MateriaCardModel[] = [];
            for(const materia of responseData){
                materiaArray.push(materia);
            }
            console.log(materiaArray);
            return materiaArray;
            }))
    }
}