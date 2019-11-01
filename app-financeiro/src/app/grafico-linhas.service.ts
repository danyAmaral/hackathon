import { Injectable } from '@angular/core';
import { PropostaDashboard } from './shared/proposta.dashboard.model';

export class DataChart {
    mesAno: string;
    valorOperacional: number;
    valorComercial: number;
    valorFinanceiro: number;
    valorTI: number;
    valorRH: number;
    valorAdministrativo: number;
}

export class Area {
    value: string;
    name: string;
}

let areas: Area[] = [
    { value: 'valorOperacional', name: 'Operacional' },
    { value: 'valorFinanceiro', name: 'Financeiro' },
    { value: 'valorComercial', name: 'Comercial' },
    { value: 'valorTI', name: 'TI' },
    { value: 'valorRH', name: 'Recursos Humanos' },
    { value: 'valorAdministrativo', name: 'Administrativo' },
];

export class GraficoLinhasService {

    constructor() { }

    public getDataSource(itensCache: PropostaDashboard[]): DataChart[] {
        let anoCorrente: number = new Date().getFullYear();

        let itensAdm = itensCache.filter(x => { return x.area == "Administrativo"; });
        let itensCom = itensCache.filter(x => { return x.area == "Comercial"; });
        let itensFin = itensCache.filter(x => { return x.area == "Financeiro"; });
        let itensOpe = itensCache.filter(x => { return x.area == "Operacional"; });
        let itensRH = itensCache.filter(x => { return x.area == "Recursos Humanos"; });
        let itensTI = itensCache.filter(x => { return x.area == "TI"; });

        console.log(itensAdm);
        console.log(itensCom);
        console.log(itensFin);
        console.log(itensOpe);
        console.log(itensRH);
        console.log(itensTI);

        const total = itensCache.length;
        const dataSource: DataChart[] = [
            {
                mesAno: '01/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'janeiro'),
                valorAdministrativo: this.calcularValor(itensAdm, 'janeiro'),
                valorFinanceiro: this.calcularValor(itensFin, 'janeiro'),
                valorOperacional: this.calcularValor(itensOpe, 'janeiro'),
                valorRH: this.calcularValor(itensRH, 'janeiro'),
                valorTI: this.calcularValor(itensTI, 'janeiro'),
            },
            {
                mesAno: '02/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'fevereiro'),
                valorAdministrativo: this.calcularValor(itensAdm, 'fevereiro'),
                valorFinanceiro: this.calcularValor(itensFin, 'fevereiro'),
                valorOperacional: this.calcularValor(itensOpe, 'fevereiro'),
                valorRH: this.calcularValor(itensRH, 'fevereiro'),
                valorTI: this.calcularValor(itensTI, 'fevereiro'),
            },
            {
                mesAno: '03/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'março'),
                valorAdministrativo: this.calcularValor(itensAdm, 'março'),
                valorFinanceiro: this.calcularValor(itensFin, 'março'),
                valorOperacional: this.calcularValor(itensOpe, 'março'),
                valorRH: this.calcularValor(itensRH, 'março'),
                valorTI: this.calcularValor(itensTI, 'março'),
            },
            {
                mesAno: '04/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'abril'),
                valorAdministrativo: this.calcularValor(itensAdm, 'abril'),
                valorFinanceiro: this.calcularValor(itensFin, 'abril'),
                valorOperacional: this.calcularValor(itensOpe, 'abril'),
                valorRH: this.calcularValor(itensRH, 'abril'),
                valorTI: this.calcularValor(itensTI, 'abril'),
            },
            {
                mesAno: '05/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'maio'),
                valorAdministrativo: this.calcularValor(itensAdm, 'maio'),
                valorFinanceiro: this.calcularValor(itensFin, 'maio'),
                valorOperacional: this.calcularValor(itensOpe, 'maio'),
                valorRH: this.calcularValor(itensRH, 'maio'),
                valorTI: this.calcularValor(itensTI, 'maio'),
            },
            {
                mesAno: '06/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'junho'),
                valorAdministrativo: this.calcularValor(itensAdm, 'junho'),
                valorFinanceiro: this.calcularValor(itensFin, 'junho'),
                valorOperacional: this.calcularValor(itensOpe, 'junho'),
                valorRH: this.calcularValor(itensRH, 'junho'),
                valorTI: this.calcularValor(itensTI, 'junho'),
            },
            {
                mesAno: '07/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'julho'),
                valorAdministrativo: this.calcularValor(itensAdm, 'julho'),
                valorFinanceiro: this.calcularValor(itensFin, 'julho'),
                valorOperacional: this.calcularValor(itensOpe, 'julho'),
                valorRH: this.calcularValor(itensRH, 'julho'),
                valorTI: this.calcularValor(itensTI, 'julho'),
            },
            {
                mesAno: '08/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'agosto'),
                valorAdministrativo: this.calcularValor(itensAdm, 'agosto'),
                valorFinanceiro: this.calcularValor(itensFin, 'janeagostoiro'),
                valorOperacional: this.calcularValor(itensOpe, 'agosto'),
                valorRH: this.calcularValor(itensRH, 'agosto'),
                valorTI: this.calcularValor(itensTI, 'agosto'),
            },
            {
                mesAno: '09/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'setembro'),
                valorAdministrativo: this.calcularValor(itensAdm, 'setembro'),
                valorFinanceiro: this.calcularValor(itensFin, 'setembro'),
                valorOperacional: this.calcularValor(itensOpe, 'setembro'),
                valorRH: this.calcularValor(itensRH, 'setembro'),
                valorTI: this.calcularValor(itensTI, 'setembro'),
            },
            {
                mesAno: '10/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'outubro'),
                valorAdministrativo: this.calcularValor(itensAdm, 'outubro'),
                valorFinanceiro: this.calcularValor(itensFin, 'outubro'),
                valorOperacional: this.calcularValor(itensOpe, 'outubro'),
                valorRH: this.calcularValor(itensRH, 'outubro'),
                valorTI: this.calcularValor(itensTI, 'outubro'),
            },
            {
                mesAno: '11/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'novembro'),
                valorAdministrativo: this.calcularValor(itensAdm, 'novembro'),
                valorFinanceiro: this.calcularValor(itensFin, 'novembro'),
                valorOperacional: this.calcularValor(itensOpe, 'novembro'),
                valorRH: this.calcularValor(itensRH, 'novembro'),
                valorTI: this.calcularValor(itensTI, 'novembro'),
            }
            ,
            {
                mesAno: '12/' + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, 'dezembro'),
                valorAdministrativo: this.calcularValor(itensAdm, 'dezembro'),
                valorFinanceiro: this.calcularValor(itensFin, 'dezembro'),
                valorOperacional: this.calcularValor(itensOpe, 'dezembro'),
                valorRH: this.calcularValor(itensRH, 'dezembro'),
                valorTI: this.calcularValor(itensTI, 'dezembro'),
            }
        ];
        return dataSource;
    }

    calcularValor(itens: PropostaDashboard[], mes: string): number {
        let total: number = 0;
        for (let i = 0; i < itens.length; i++) {
            let dados = itens[i].dadosFinanceiros.filter(x => x.mes.toUpperCase() === mes.toUpperCase());
            if (dados.length > 0){
                total = total + dados[0].valor;
            }
        }

        return total;
    }

    getAreas(): Area[] {
        return areas;
    }
}