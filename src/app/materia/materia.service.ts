import {Injectable} from '@angular/core';
import { AulaCardModel } from '../object-model/aula-card-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'



@Injectable({providedIn: 'root'})
export class MateriaService{

    constructor(private http:HttpClient){}

    createAndStoreAula(aula: AulaCardModel){
        return this.http.post<AulaCardModel>('/api/aulaCard',aula);
    }

    fetchAula(){
        return this.http.get<AulaCardModel[]>('/api/aulaCard').pipe(map(
            responseData => {const aulaArray: AulaCardModel[] = [];
            for(const aula of responseData){
                aulaArray.push(aula);
            }
            console.log(aulaArray);
            return aulaArray;
            }))
    }

}