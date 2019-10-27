import { Proposta } from './shared/proposta.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {URL_API} from './app.api'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PropostaService{
    constructor(private http: HttpClient){}
    
    public salvarItem(proposta: Proposta): Observable<any>{
        let itemProposta:Proposta = new Proposta();
        itemProposta.titulo = proposta.titulo;
        itemProposta.descricao = proposta.descricao;
        itemProposta.area = proposta.area;
        itemProposta.status = proposta.status;
        itemProposta.dataInicio = proposta.dataInicio;
        itemProposta.dataTermino = proposta.dataTermino;

        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });   
           
       return this.http.post(
            `${URL_API}/propostas`,
             JSON.stringify(itemProposta),
             {headers: headers}
        )
           
    }

    public getPropostaPorId(id: number): Promise<Proposta>{
        return this.http.get(`${URL_API}/propostas?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta[0]
            });
    }



}