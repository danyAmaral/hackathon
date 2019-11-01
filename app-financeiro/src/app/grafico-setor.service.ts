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
    public getInvestimentoPorArea(itensCache: Array<PropostaDashboard>): DataChart[] {
        let itensAdm = itensCache.filter(x => { return x.area == AREA_ADMINISTRATIVO; });
        let itensCom = itensCache.filter(x => { return x.area == AREA_COMERCIAL; });
        let itensFin = itensCache.filter(x => { return x.area == AREA_FINANCEIRO; });
        let itensOpe = itensCache.filter(x => { return x.area == AREA_OPERACIONAL; });
        let itensRH = itensCache.filter(x => { return x.area == AREA_RH; });
        let itensTI = itensCache.filter(x => { return x.area == AREA_TI; });


        const total = itensCache.length;
        const dataSource: DataChart[] = [
            { setor: AREA_ADMINISTRATIVO, val: itensAdm.length, valorTotal: this.calcularValorTotal(itensAdm), qtdPropostas: this.calcularPercentual(itensAdm.length, total)},
            { setor: AREA_COMERCIAL, val: itensCom.length, valorTotal: this.calcularValorTotal(itensCom), qtdPropostas: this.calcularPercentual(itensCom.length, total)},
            { setor: AREA_FINANCEIRO, val: itensFin.length, valorTotal: this.calcularValorTotal(itensFin), qtdPropostas: this.calcularPercentual(itensFin.length, total)},
            { setor: AREA_OPERACIONAL, val: itensOpe.length, valorTotal: this.calcularValorTotal(itensOpe), qtdPropostas: this.calcularPercentual(itensOpe.length, total)},
            { setor: AREA_RH, val: itensRH.length, valorTotal: this.calcularValorTotal(itensRH), qtdPropostas: this.calcularPercentual(itensRH.length, total)},
            { setor: AREA_TI, val: itensTI.length, valorTotal: this.calcularValorTotal(itensTI), qtdPropostas: this.calcularPercentual(itensTI.length, total)}
        ];
        return dataSource;

    }

    private calcularValorTotal(itens: PropostaDashboard[]): number {
        let total: number = 0;
        for (let i = 0; i < itens.length; i++) {
            let item = itens[i];
            total = total + item.valorTotal;
        }

        return total;
    }

    private calcularPercentual(valor, total) {
        return Math.round((100 * valor) / total)
    }


}
