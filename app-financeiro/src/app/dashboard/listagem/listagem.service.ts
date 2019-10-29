import { Proposta } from 'src/app/shared/proposta.model';
import { DadosFinanceiros } from 'src/app/shared/dados-financeiros.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ListagemService {

  public propostas: Array<Proposta> = [
    {
      id: 1,
      titulo: 'QQQQQ',
      descricao: 'VALQ',
      area: 'BxA',
      status: 'Aguardando',
      dataInicio: new Date(),
      dataTermino: new Date(),
      dadosFinanceiros: Array<DadosFinanceiros>()
    },
    {
      id: 2,
      titulo: 'AAA',
      descricao: 'TRIPLE A',
      area: '2BxA',
      status: 'Aguardando',
      dataInicio: new Date(),
      dataTermino: new Date(),
      dadosFinanceiros: Array<DadosFinanceiros>()
    },
    {
      id: 3,
      titulo: 'OPUSCOPS',
      descricao: 'KA KA KA',
      area: '2PIrAOQUADRADO',
      status: 'Aprovada',
      dataInicio: new Date(),
      dataTermino: new Date(),
      dadosFinanceiros: Array<DadosFinanceiros>()
    },
    {
      id: 4,
      titulo: 'SEU TITULO AQUI',
      descricao: 'Opcional obrigatório',
      area: 'DxdSOBRE2',
      status: 'Madura',
      dataInicio: new Date(),
      dataTermino: new Date(),
      dadosFinanceiros: Array<DadosFinanceiros>()
    }
  ];

  public getAll(): Array<Proposta> {
    return this.propostas;
  }
}
