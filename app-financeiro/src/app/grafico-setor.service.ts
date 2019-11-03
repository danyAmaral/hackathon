import { Injectable } from '@angular/core';
import { PropostaDashboard } from './shared/proposta.dashboard.model';
import { AREA_ADMINISTRATIVO, AREA_COMERCIAL, AREA_FINANCEIRO, AREA_OPERACIONAL, AREA_RH, AREA_TI } from './shared/util.model';

export class DataChart {
    setor: string;
    val: number;
    valorTotal: number;
    qtdPropostas: number;
}

@Injectable()
export class GraficoSetorService {
    public getInvestimentoPorArea(itensCache: Array<PropostaDashboard>, ano: string): DataChart[] {
        const itensAdm = itensCache.filter(x => x.area === AREA_ADMINISTRATIVO);
        const itensCom = itensCache.filter(x => x.area === AREA_COMERCIAL);
        const itensFin = itensCache.filter(x => x.area === AREA_FINANCEIRO);
        const itensOpe = itensCache.filter(x => x.area === AREA_OPERACIONAL);
        const itensRH = itensCache.filter(x => x.area === AREA_RH);
        const itensTI = itensCache.filter(x => x.area === AREA_TI);

        const total = itensCache.length;
        const dataSource: Array<DataChart> = new Array<DataChart>();
        if (itensAdm.length > 0) {
            let adm = new DataChart();
            adm.setor = AREA_ADMINISTRATIVO;
            adm.val = itensAdm.length;
            adm.valorTotal = this.calcularValorTotal(itensAdm, ano);
            adm.qtdPropostas = this.calcularPercentual(itensAdm.length, total);
            dataSource.push(adm);
        }
        if (itensCom.length > 0) {
            let com = new DataChart();
            com.setor = AREA_COMERCIAL;
            com.val = itensCom.length;
            com.valorTotal = this.calcularValorTotal(itensCom, ano);
            com.qtdPropostas = this.calcularPercentual(itensCom.length, total);
            dataSource.push(com);
        }

        if (itensFin.length > 0) {
            let fin = new DataChart();
            fin.setor = AREA_FINANCEIRO;
            fin.val = itensFin.length;
            fin.valorTotal = this.calcularValorTotal(itensFin, ano);
            fin.qtdPropostas = this.calcularPercentual(itensFin.length, total);
            dataSource.push(fin);
        }
        if (itensOpe.length > 0) {
            let ope = new DataChart();
            ope.setor = AREA_OPERACIONAL;
            ope.val = itensOpe.length;
            ope.valorTotal = this.calcularValorTotal(itensOpe, ano);
            ope.qtdPropostas = this.calcularPercentual(itensOpe.length, total);
            dataSource.push(ope);
        }

        if (itensRH.length > 0) {
            let rh = new DataChart();
            rh.setor = AREA_RH;
            rh.val = itensRH.length;
            rh.valorTotal = this.calcularValorTotal(itensRH, ano);
            rh.qtdPropostas = this.calcularPercentual(itensRH.length, total);
            dataSource.push(rh);
        }

        if (itensTI.length > 0) {
            let ti = new DataChart();
            ti.setor = AREA_TI;
            ti.val = itensTI.length;
            ti.valorTotal = this.calcularValorTotal(itensTI, ano);
            ti.qtdPropostas = this.calcularPercentual(itensTI.length, total);
            dataSource.push(ti);
        }
        return dataSource;
    }

    private calcularValorTotal(itens: PropostaDashboard[], ano: string): number {
        let total: number = 0;
        for (let i = 0; i < itens.length; i++) {
            let item = itens[i];
            let dadosFinanceiros = item.dadosFinanceiros.filter(y => { return y.ano.toString() == ano });

            for (let j = 0; j < dadosFinanceiros.length; j++) {
                total += dadosFinanceiros[j].valor;
            }
        }

        return total;
    }

    private calcularPercentual(valor, total) {
        return Math.round((100 * valor) / total);
    }
}
