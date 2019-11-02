import { Injectable } from '@angular/core';
import { PropostaDashboard } from './shared/proposta.dashboard.model';
import * as Util from './shared/util.model';

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

const areas: Area[] = [
    { value: 'valorOperacional', name: Util.AREA_OPERACIONAL },
    { value: 'valorFinanceiro', name: Util.AREA_FINANCEIRO },
    { value: 'valorComercial', name: Util.AREA_COMERCIAL },
    { value: 'valorTI', name: Util.AREA_TI },
    { value: 'valorRH', name: Util.AREA_RH },
    { value: 'valorAdministrativo', name: Util.AREA_ADMINISTRATIVO },
];

export class GraficoLinhasService {

    constructor() { }

    public getDataSource(itensCache: PropostaDashboard[]): DataChart[] {

        const anoCorrente: number = itensCache[0].dadosFinanceiros[0].ano;

        const itensAdm = itensCache.filter(x => x.area === Util.AREA_ADMINISTRATIVO);
        const itensCom = itensCache.filter(x => x.area === Util.AREA_COMERCIAL);
        const itensFin = itensCache.filter(x => x.area === Util.AREA_FINANCEIRO);
        const itensOpe = itensCache.filter(x => x.area === Util.AREA_OPERACIONAL);
        const itensRH = itensCache.filter(x => x.area === Util.AREA_RH);
        const itensTI = itensCache.filter(x => x.area === Util.AREA_TI);

        const total = itensCache.length;
        const dataSource: DataChart[] = [
            {
                mesAno: Util.MES_MINJANEIRO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_JANEIRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_JANEIRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_JANEIRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_JANEIRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_JANEIRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_JANEIRO.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINFEVEREIRO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_FEVEREIRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_FEVEREIRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_FEVEREIRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_FEVEREIRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_FEVEREIRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_FEVEREIRO.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINMARCO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_MARCO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_MARCO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_MARCO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_MARCO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_MARCO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_MARCO.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINABRIL + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_ABRIL.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_ABRIL.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_ABRIL.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_ABRIL.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_ABRIL.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_ABRIL.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINMAIO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_MAIO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_MAIO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_MAIO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_MAIO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_MAIO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_MAIO.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINJUNHO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_JUNHO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm,  Util.MES_JUNHO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin,  Util.MES_JUNHO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe,  Util.MES_JUNHO.toLowerCase()),
                valorRH: this.calcularValor(itensRH,  Util.MES_JUNHO.toLowerCase()),
                valorTI: this.calcularValor(itensTI,  Util.MES_JUNHO.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINJULHO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_JULHO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_JULHO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_JULHO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_JULHO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_JULHO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_JULHO.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINAGOSTO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_AGOSTO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_AGOSTO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_AGOSTO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_AGOSTO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_AGOSTO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_AGOSTO.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINSETEMBRO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_SETEMBRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_SETEMBRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_SETEMBRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_SETEMBRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_SETEMBRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_SETEMBRO.toLowerCase()),
            },
            {
                mesAno: Util.MES_OUTUBRO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_OUTUBRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_OUTUBRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_OUTUBRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_OUTUBRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_OUTUBRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_OUTUBRO.toLowerCase()),
            },
            {
                mesAno: Util.MES_MINNOVEMBRO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_NOVEMBRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_NOVEMBRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_NOVEMBRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_NOVEMBRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_NOVEMBRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_NOVEMBRO.toLowerCase()),
            }
            ,
            {
                mesAno: Util.MES_MINDEZEMBRO + '/' + anoCorrente,
                valorComercial: this.calcularValor(itensCom, Util.MES_DEZEMBRO.toLowerCase()),
                valorAdministrativo: this.calcularValor(itensAdm, Util.MES_DEZEMBRO.toLowerCase()),
                valorFinanceiro: this.calcularValor(itensFin, Util.MES_DEZEMBRO.toLowerCase()),
                valorOperacional: this.calcularValor(itensOpe, Util.MES_DEZEMBRO.toLowerCase()),
                valorRH: this.calcularValor(itensRH, Util.MES_DEZEMBRO.toLowerCase()),
                valorTI: this.calcularValor(itensTI, Util.MES_DEZEMBRO.toLowerCase()),
            }
        ];
        return dataSource;
    }

    calcularValor(itens: PropostaDashboard[], mes: string): number {
        let total: number = 0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < itens.length; i++) {
            const dados = itens[i].dadosFinanceiros.filter(x => x.mes.toUpperCase() === mes.toUpperCase());
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