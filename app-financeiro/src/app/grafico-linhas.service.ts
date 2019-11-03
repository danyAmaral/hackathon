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

    public getDataSource(itensCache: PropostaDashboard[], ano: string): DataChart[] {

        const anoCorrente: number = +ano;

        const itensAdm = itensCache.filter(x => x.area === Util.AREA_ADMINISTRATIVO);
        const itensCom = itensCache.filter(x => x.area === Util.AREA_COMERCIAL);
        const itensFin = itensCache.filter(x => x.area === Util.AREA_FINANCEIRO);
        const itensOpe = itensCache.filter(x => x.area === Util.AREA_OPERACIONAL);
        const itensRH = itensCache.filter(x => x.area === Util.AREA_RH);
        const itensTI = itensCache.filter(x => x.area === Util.AREA_TI);

        const total = itensCache.length;
        const dataSource: Array<DataChart> = new Array<DataChart>();

        const jan = new DataChart();
        jan.mesAno = Util.MES_MINJANEIRO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            jan.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_JANEIRO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            jan.valorComercial = this.calcularValor(itensCom, Util.MES_JANEIRO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            jan.valorFinanceiro = this.calcularValor(itensFin, Util.MES_JANEIRO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            jan.valorOperacional = this.calcularValor(itensOpe, Util.MES_JANEIRO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            jan.valorRH = this.calcularValor(itensRH, Util.MES_JANEIRO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            jan.valorTI = this.calcularValor(itensTI, Util.MES_JANEIRO.toLowerCase(), anoCorrente);
        }

        const fev = new DataChart();
        fev.mesAno = Util.MES_MINFEVEREIRO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            fev.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_FEVEREIRO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            fev.valorComercial = this.calcularValor(itensCom, Util.MES_FEVEREIRO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            fev.valorFinanceiro = this.calcularValor(itensFin, Util.MES_FEVEREIRO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            fev.valorOperacional = this.calcularValor(itensOpe, Util.MES_FEVEREIRO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            fev.valorRH = this.calcularValor(itensRH, Util.MES_FEVEREIRO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            fev.valorTI = this.calcularValor(itensTI, Util.MES_FEVEREIRO.toLowerCase(), anoCorrente);
        }

        const mar = new DataChart();
        mar.mesAno = Util.MES_MINMARCO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            mar.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_MARCO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            mar.valorComercial = this.calcularValor(itensCom, Util.MES_MARCO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            mar.valorFinanceiro = this.calcularValor(itensFin, Util.MES_MARCO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            mar.valorOperacional = this.calcularValor(itensOpe, Util.MES_MARCO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            mar.valorRH = this.calcularValor(itensRH, Util.MES_MARCO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            mar.valorTI = this.calcularValor(itensTI, Util.MES_MARCO.toLowerCase(), anoCorrente);
        }

        const abr = new DataChart();
        abr.mesAno = Util.MES_MINABRIL + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            abr.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_ABRIL.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            abr.valorComercial = this.calcularValor(itensCom, Util.MES_ABRIL.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            abr.valorFinanceiro = this.calcularValor(itensFin, Util.MES_ABRIL.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            abr.valorOperacional = this.calcularValor(itensOpe, Util.MES_ABRIL.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            abr.valorRH = this.calcularValor(itensRH, Util.MES_ABRIL.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            abr.valorTI = this.calcularValor(itensTI, Util.MES_ABRIL.toLowerCase(), anoCorrente);
        }

        const mai = new DataChart();
        mai.mesAno = Util.MES_MINMAIO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            mai.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_MAIO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            mai.valorComercial = this.calcularValor(itensCom, Util.MES_MAIO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            mai.valorFinanceiro = this.calcularValor(itensFin, Util.MES_MAIO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            mai.valorOperacional = this.calcularValor(itensOpe, Util.MES_MAIO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            mai.valorRH = this.calcularValor(itensRH, Util.MES_MAIO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            mai.valorTI = this.calcularValor(itensTI, Util.MES_MAIO.toLowerCase(), anoCorrente);
        }

        const jun = new DataChart();
        jun.mesAno = Util.MES_MINJUNHO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            jun.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_JUNHO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            jun.valorComercial = this.calcularValor(itensCom, Util.MES_JUNHO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            jun.valorFinanceiro = this.calcularValor(itensFin, Util.MES_JUNHO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            jun.valorOperacional = this.calcularValor(itensOpe, Util.MES_JUNHO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            jun.valorRH = this.calcularValor(itensRH, Util.MES_JUNHO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            jun.valorTI = this.calcularValor(itensTI, Util.MES_JUNHO.toLowerCase(), anoCorrente);
        }

        const jul = new DataChart();
        jul.mesAno = Util.MES_MINJULHO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            jul.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_JULHO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            jul.valorComercial = this.calcularValor(itensCom, Util.MES_JULHO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            jul.valorFinanceiro = this.calcularValor(itensFin, Util.MES_JULHO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            jul.valorOperacional = this.calcularValor(itensOpe, Util.MES_JULHO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            jul.valorRH = this.calcularValor(itensRH, Util.MES_JULHO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            jul.valorTI = this.calcularValor(itensTI, Util.MES_JULHO.toLowerCase(), anoCorrente);
        }

        const ago = new DataChart();
        ago.mesAno = Util.MES_MINAGOSTO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            ago.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_AGOSTO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            ago.valorComercial = this.calcularValor(itensCom, Util.MES_AGOSTO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            ago.valorFinanceiro = this.calcularValor(itensFin, Util.MES_AGOSTO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            ago.valorOperacional = this.calcularValor(itensOpe, Util.MES_AGOSTO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            ago.valorRH = this.calcularValor(itensRH, Util.MES_AGOSTO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            ago.valorTI = this.calcularValor(itensTI, Util.MES_AGOSTO.toLowerCase(), anoCorrente);
        }

        const set = new DataChart();
        set.mesAno = Util.MES_MINSETEMBRO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            set.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_SETEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            set.valorComercial = this.calcularValor(itensCom, Util.MES_SETEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            set.valorFinanceiro = this.calcularValor(itensFin, Util.MES_SETEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            set.valorOperacional = this.calcularValor(itensOpe, Util.MES_SETEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            set.valorRH = this.calcularValor(itensRH, Util.MES_SETEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            set.valorTI = this.calcularValor(itensTI, Util.MES_SETEMBRO.toLowerCase(), anoCorrente);
        }

        const out = new DataChart();
        out.mesAno = Util.MES_MINOUTUBRO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            out.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_OUTUBRO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            out.valorComercial = this.calcularValor(itensCom, Util.MES_OUTUBRO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            out.valorFinanceiro = this.calcularValor(itensFin, Util.MES_OUTUBRO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            out.valorOperacional = this.calcularValor(itensOpe, Util.MES_OUTUBRO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            out.valorRH = this.calcularValor(itensRH, Util.MES_OUTUBRO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            out.valorTI = this.calcularValor(itensTI, Util.MES_OUTUBRO.toLowerCase(), anoCorrente);
        }

        const nov = new DataChart();
        nov.mesAno = Util.MES_MINNOVEMBRO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            nov.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_NOVEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            nov.valorComercial = this.calcularValor(itensCom, Util.MES_NOVEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            nov.valorFinanceiro = this.calcularValor(itensFin, Util.MES_NOVEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            nov.valorOperacional = this.calcularValor(itensOpe, Util.MES_NOVEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            nov.valorRH = this.calcularValor(itensRH, Util.MES_NOVEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            nov.valorTI = this.calcularValor(itensTI, Util.MES_NOVEMBRO.toLowerCase(), anoCorrente);
        }

        const dez = new DataChart();
        dez.mesAno = Util.MES_MINDEZEMBRO + '/' + anoCorrente;
        if (itensAdm.length > 0) {
            dez.valorAdministrativo = this.calcularValor(itensAdm, Util.MES_DEZEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensCom.length > 0) {
            dez.valorComercial = this.calcularValor(itensCom, Util.MES_DEZEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensFin.length > 0) {
            dez.valorFinanceiro = this.calcularValor(itensFin, Util.MES_DEZEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensOpe.length > 0) {
            dez.valorOperacional = this.calcularValor(itensOpe, Util.MES_DEZEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensRH.length > 0) {
            dez.valorRH = this.calcularValor(itensRH, Util.MES_DEZEMBRO.toLowerCase(), anoCorrente);
        }
        if (itensTI.length > 0) {
            dez.valorTI = this.calcularValor(itensTI, Util.MES_DEZEMBRO.toLowerCase(), anoCorrente);
        }

        dataSource.push(jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez);
        return dataSource;
    }

    public calcularValor(itens: PropostaDashboard[], mes: string, anoCorrente: number): number {
        let total = 0;
        for (const item of itens) {
            const dados = item.dadosFinanceiros.filter(x => x.mes.toUpperCase() === mes.toUpperCase()
                && x.ano.toString() === anoCorrente.toString());
            if (dados.length > 0) {
                total = total + dados[0].valor;
            }
        }

        return total;
    }

    public getAreas(): Area[] {
        return areas;
    }
}
