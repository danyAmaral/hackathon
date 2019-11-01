import { Injectable } from '@angular/core';
import { PropostaDashboard } from './shared/proposta.dashboard.model';

export class DataChart {
    setor: string;
    val: number;
    valorTotal: number;
    qtdPropostas: number;
}

@Injectable()
export class GraficoSetorService {
    public getInvestimentoPorArea(itensCache: Array<PropostaDashboard>): DataChart[] {
        let itensAdm = itensCache.filter(x => { return x.area == "Administrativo"; });
        let itensCom = itensCache.filter(x => { return x.area == "Comercial"; });
        let itensFin = itensCache.filter(x => { return x.area == "Financeiro"; });
        let itensOpe = itensCache.filter(x => { return x.area == "Operacional"; });
        let itensRH = itensCache.filter(x => { return x.area == "Recursos Humanos"; });
        let itensTI = itensCache.filter(x => { return x.area == "TI"; });


        const total = itensCache.length;
        const dataSource: DataChart[] = [
            { setor: 'Administrativo', val: itensAdm.length, valorTotal: this.calcularValorTotal(itensAdm), qtdPropostas: this.calcularPercentual(itensAdm.length, total)},
            { setor: 'Comercial', val: itensCom.length, valorTotal: this.calcularValorTotal(itensCom), qtdPropostas: this.calcularPercentual(itensCom.length, total)},
            { setor: 'Financeiro', val: itensFin.length, valorTotal: this.calcularValorTotal(itensFin), qtdPropostas: this.calcularPercentual(itensFin.length, total)},
            { setor: 'Operacional', val: itensOpe.length, valorTotal: this.calcularValorTotal(itensOpe), qtdPropostas: this.calcularPercentual(itensOpe.length, total)},
            { setor: 'Recursos Humanos', val: itensRH.length, valorTotal: this.calcularValorTotal(itensRH), qtdPropostas: this.calcularPercentual(itensRH.length, total)},
            { setor: 'TI', val: itensTI.length, valorTotal: this.calcularValorTotal(itensTI), qtdPropostas: this.calcularPercentual(itensTI.length, total)}
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
