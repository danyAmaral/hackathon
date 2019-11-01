import { Injectable } from '@angular/core';
import { PropostaDashboard } from './shared/proposta.dashboard.model';
import { AREA_TI, AREA_RH, AREA_OPERACIONAL, AREA_FINANCEIRO, AREA_COMERCIAL, AREA_ADMINISTRATIVO, MES_MINJANEIRO, MES_MINFEVEREIRO, 
    MES_MINMARCO, MES_MINABRIL, MES_MINMAIO, MES_MINJUNHO, MES_MINJULHO, MES_MINAGOSTO, MES_MINSETEMBRO, MES_OUTUBRO, MES_MINNOVEMBRO, 
    MES_DEZEMBRO, MES_MINDEZEMBRO, MES_JANEIRO, MES_FEVEREIRO, MES_MARCO, MES_ABRIL, MES_MAIO, MES_JUNHO, MES_JULHO, MES_AGOSTO, 
    MES_SETEMBRO, MES_NOVEMBRO } from './shared/util.model';

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
    { value: 'valorOperacional', name: AREA_OPERACIONAL },
    { value: 'valorFinanceiro', name: AREA_FINANCEIRO },
    { value: 'valorComercial', name: AREA_COMERCIAL },
    { value: 'valorTI', name: AREA_TI },
    { value: 'valorRH', name: AREA_RH },
    { value: 'valorAdministrativo', name: AREA_ADMINISTRATIVO },
];

export class GraficoLinhasService {

    constructor() { }

    public getDataSource(itensCache: PropostaDashboard[]): DataChart[] {
    
        let anoCorrente: number = itensCache[0].dadosFinanceiros[0].ano;

        let itensAdm = itensCache.filter(x => { return x.area == AREA_ADMINISTRATIVO; });
        let itensCom = itensCache.filter(x => { return x.area == AREA_COMERCIAL; });
        let itensFin = itensCache.filter(x => { return x.area == AREA_FINANCEIRO; });
        let itensOpe = itensCache.filter(x => { return x.area == AREA_OPERACIONAL; });
        let itensRH = itensCache.filter(x => { return x.area == AREA_RH; });
        let itensTI = itensCache.filter(x => { return x.area == AREA_TI; });

        const total = itensCache.length;
        const dataSource: DataChart[] = [
            {
                mesAno: MES_MINJANEIRO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_JANEIRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_JANEIRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_JANEIRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_JANEIRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_JANEIRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_JANEIRO.toLowerCase()),
            },
            {
                mesAno: MES_MINFEVEREIRO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_FEVEREIRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_FEVEREIRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_FEVEREIRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_FEVEREIRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_FEVEREIRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_FEVEREIRO.toLowerCase()),
            },
            {
                mesAno: MES_MINMARCO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_MARCO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_MARCO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_MARCO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_MARCO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_MARCO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_MARCO.toLowerCase()),
            },
            {
                mesAno: MES_MINABRIL + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_ABRIL.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_ABRIL.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_ABRIL.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_ABRIL.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_ABRIL.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_ABRIL.toLowerCase()),
            },
            {
                mesAno: MES_MINMAIO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_MAIO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_MAIO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_MAIO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_MAIO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_MAIO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_MAIO.toLowerCase()),
            },
            {
                mesAno: MES_MINJUNHO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_JUNHO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm,  MES_JUNHO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin,  MES_JUNHO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe,  MES_JUNHO.toLowerCase()),
                valorRH: this.calcularValor(itensRH,  MES_JUNHO.toLowerCase()),
                valorTI: this.calcularValor(itensTI,  MES_JUNHO.toLowerCase()),
            },
            {
                mesAno: MES_MINJULHO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_JULHO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_JULHO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_JULHO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_JULHO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_JULHO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_JULHO.toLowerCase()),
            },
            {
                mesAno: MES_MINAGOSTO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_AGOSTO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_AGOSTO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_AGOSTO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_AGOSTO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_AGOSTO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_AGOSTO.toLowerCase()),
            },
            {
                mesAno: MES_MINSETEMBRO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_SETEMBRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_SETEMBRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_SETEMBRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_SETEMBRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_SETEMBRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_SETEMBRO.toLowerCase()),
            },
            {
                mesAno: MES_OUTUBRO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_OUTUBRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_OUTUBRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_OUTUBRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_OUTUBRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_OUTUBRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_OUTUBRO.toLowerCase()),
            },
            {
                mesAno: MES_MINNOVEMBRO + "/" +anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_NOVEMBRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_NOVEMBRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_NOVEMBRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_NOVEMBRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_NOVEMBRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_NOVEMBRO.toLowerCase()),
            }
            ,
            {
                mesAno: MES_MINDEZEMBRO + "/" + anoCorrente, 
                valorComercial: this.calcularValor(itensCom, MES_DEZEMBRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, MES_DEZEMBRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, MES_DEZEMBRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, MES_DEZEMBRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, MES_DEZEMBRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, MES_DEZEMBRO.toLowerCase()),
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