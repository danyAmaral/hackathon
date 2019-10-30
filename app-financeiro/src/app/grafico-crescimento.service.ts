import { Injectable } from '@angular/core';
import { Proposta } from './shared/proposta.model'
import { DadosFinanceiros } from './shared/dados-financeiros.model'

class Complaints {
    complaint: string;
    count: number
}

export class ComplaintsWithPercent {
    complaint: string;
    count: number;
    cumulativePercent: number;
}

let complaintsData: Complaints[] = [
    { complaint: "Cold pizza", count: 780 },
    { complaint: "Not enough cheese", count: 120 },
    { complaint: "Underbaked or Overbaked", count: 52 },
    { complaint: "Delayed delivery", count: 1123 },
    { complaint: "Damaged pizza", count: 321 },
    { complaint: "Incorrect billing", count: 89 },
    { complaint: "Wrong size delivered", count: 222 }
];

@Injectable()
export class GraficoCrescimentoService {
    

    getComplaintsData(): ComplaintsWithPercent[] {
        var data = complaintsData.sort(function (a, b) {
                return b.count - a.count;
            }),
            totalCount = data.reduce(function (prevValue, item) {
                return prevValue + item.count;
            }, 0),
            cumulativeCount = 0;
        return data.map(function (item, index) {
            cumulativeCount += item.count;
            return {
                complaint: item.complaint,
                count: item.count,
                cumulativePercent: Math.round(cumulativeCount * 100 / totalCount)
            };
        });
    }

    public gerarPropostas(): Proposta[] {
        return [
            {
                titulo: "Proposta 1",
                descricao: "Descrição da Proposta 1",
                area: "Comercial",
                status: "Rascunho",
                dataInicio: new Date(2019, 10, 10),
                dataTermino: new Date(2019, 10, 10),
                id: 1,
                dadosFinanceiros: [
                    this.gerarDadosFinanceiros(2019)
                    // this.gerarDadosFinanceiros(2020),
                    // this.gerarDadosFinanceiros(2021)
                ]
            },
            {
                titulo: "Proposta 1",
                descricao: "Descrição da Proposta 1",
                area: "Comercial",
                status: "Rascunho",
                dataInicio: new Date(2019, 10, 10),
                dataTermino: new Date(2019, 10, 10),
                id: 1,
                dadosFinanceiros: [
                    this.gerarDadosFinanceiros(2019)
                    // this.gerarDadosFinanceiros(2020),
                    // this.gerarDadosFinanceiros(2021)
                ]
            },
            {
                titulo: "Proposta 3",
                descricao: "Descrição da Proposta 3",
                area: "Operacional",
                status: "Aguardando Aprovação",
                dataInicio: new Date(2019, 10, 10),
                dataTermino: new Date(2019, 10, 10),
                id: 1,
                dadosFinanceiros: [
                    this.gerarDadosFinanceiros(2019)
                    // this.gerarDadosFinanceiros(2020),
                    // this.gerarDadosFinanceiros(2021)
                ]
            }
        ]
    }

    private gerarDadosFinanceiros(ano: number): DadosFinanceiros {
        return {
            ano: ano, janeiro: Math.random() * 10000, fevereiro: Math.random() * 10000, marco: Math.random() * 10000,
            abril: Math.random() * 10000, maio: Math.random() * 10000, junho: Math.random() * 10000,
            julho: Math.random() * 10000, agosto: Math.random() * 10000, setembro: Math.random() * 10000,
            outubro: Math.random() * 10000, novembro: Math.random() * 10000, dezembro: Math.random() * 10000
        }
    }

    public getPropostas(): Proposta[]{
        return this.gerarPropostas()
    }

    public getDataSource(): any[]{
        return [
            { ano: 2019, mes: 1, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 2, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 3, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 4, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 5, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 6, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 7, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 8, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 9, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 10, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 11, valor: <any>Math.random * 10000 },
            { ano: 2019, mes: 12, valor: <any>Math.random * 10000 }      
        ]          
    }
}