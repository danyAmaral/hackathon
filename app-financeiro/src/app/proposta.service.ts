import { Proposta } from './shared/proposta.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PropostaDashboard } from './shared/proposta.dashboard.model';
import { DadosFinanceirosDashboard } from './shared/dados-financeiros-dashboard.model';
import * as Util from './shared/util.model';

@Injectable()
export class PropostaService {
  constructor(private http: HttpClient) { }

  public salvarItem(proposta: Proposta): Observable<any> {
    const itemProposta: Proposta = new Proposta();
    itemProposta.titulo = proposta.titulo;
    itemProposta.descricao = proposta.descricao;
    itemProposta.area = proposta.area;
    itemProposta.status = proposta.status;
    itemProposta.dataInicio = proposta.dataInicio;
    itemProposta.dataTermino = proposta.dataTermino;
    itemProposta.dadosFinanceiros = proposta.dadosFinanceiros;

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(
      `${URL_API}/propostas`,
      JSON.stringify(itemProposta),
      { headers: headers }
    );
  }

  public atualizarItem(proposta: Proposta): Observable<any> {

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(
      `${URL_API}/propostas/${proposta.id}`,
      JSON.stringify(proposta),
      { headers: headers }
    );
  }

  public getPropostaPorId(id: number): Promise<Proposta> {
    return this.http.get(`${URL_API}/propostas?id=${id}`)
      .toPromise()
      .then((resposta: Response) => {
        return resposta[0];
      });
  }

  public getAll(): Promise<Array<PropostaDashboard>> {
    return this.http.get(`${URL_API}/propostas`)
      .toPromise()
      .then((resposta: Array<Proposta>) => {
        const arrayRetorno = this.MapearItensDashboard(resposta);
        return arrayRetorno;
      });
  }

  public MapearItensDashboard(todasPropostas: Array<Proposta>): Array<PropostaDashboard> {
    const arrayRetorno: Array<PropostaDashboard> = new Array<PropostaDashboard>();

    for (let j = 0; j < todasPropostas.length; j++) {
      const element = todasPropostas[j];
      const item = new PropostaDashboard();
      item.id = element.id;
      item.titulo = element.titulo;
      item.status = element.status;
      item.area = element.area;
      item.valorTotal = 0;
      item.dadosFinanceiros = new Array<DadosFinanceirosDashboard>();

      for (let i = 0; i < element.dadosFinanceiros.length; i++) {
        const registro = element.dadosFinanceiros[i];

        const jan = new DadosFinanceirosDashboard();
        jan.ano = registro.ano;
        jan.mes = Util.MES_JANEIRO;
        jan.valor = registro.janeiro;
        item.valorTotal += registro.janeiro;

        const fev = new DadosFinanceirosDashboard();
        fev.ano = registro.ano;
        fev.mes = Util.MES_FEVEREIRO;
        fev.valor = registro.fevereiro;
        item.valorTotal += registro.fevereiro;

        const mar = new DadosFinanceirosDashboard();
        mar.ano = registro.ano;
        mar.mes = Util.MES_MARCO;
        mar.valor = registro.marco;
        item.valorTotal += registro.marco;

        const abr = new DadosFinanceirosDashboard();
        abr.ano = registro.ano;
        abr.mes = Util.MES_ABRIL;
        abr.valor = registro.abril;
        item.valorTotal += registro.abril;

        const mai = new DadosFinanceirosDashboard();
        mai.ano = registro.ano;
        mai.mes = Util.MES_MAIO;
        mai.valor = registro.maio;
        item.valorTotal += registro.maio;

        const jun = new DadosFinanceirosDashboard();
        jun.ano = registro.ano;
        jun.mes = Util.MES_JUNHO;
        jun.valor = registro.junho;
        item.valorTotal += registro.junho;

        const jul = new DadosFinanceirosDashboard();
        jul.ano = registro.ano;
        jul.mes = Util.MES_JULHO;
        jul.valor = registro.julho;
        item.valorTotal += registro.julho;

        const ago = new DadosFinanceirosDashboard();
        ago.ano = registro.ano;
        ago.mes = Util.MES_AGOSTO;
        ago.valor = registro.agosto;
        item.valorTotal += registro.agosto;

        const set = new DadosFinanceirosDashboard();
        set.ano = registro.ano;
        set.mes = Util.MES_SETEMBRO;
        set.valor = registro.setembro;
        item.valorTotal += registro.setembro;

        const out = new DadosFinanceirosDashboard();
        out.ano = registro.ano;
        out.mes = Util.MES_OUTUBRO;
        out.valor = registro.outubro;
        item.valorTotal += registro.outubro;

        const nov = new DadosFinanceirosDashboard();
        nov.ano = registro.ano;
        nov.mes = Util.MES_NOVEMBRO;
        nov.valor = registro.novembro;
        item.valorTotal += registro.novembro;

        const dez = new DadosFinanceirosDashboard();
        dez.ano = registro.ano;
        dez.mes = Util.MES_DEZEMBRO;
        dez.valor = registro.dezembro;
        item.valorTotal += registro.dezembro;

        item.dadosFinanceiros.push(jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez);
      }
      arrayRetorno.push(item);
    }
    return arrayRetorno;
  }
}
