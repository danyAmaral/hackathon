import { Injectable } from '@angular/core';
import { Proposta } from './shared/proposta.model'
import { DadosFinanceiros } from './shared/dados-financeiros.model'
import { PropostaDashboard } from './shared/proposta.dashboard.model';
import * as Util from './shared/util.model';

export class AreaChartValues {
    administrativo: number = 0;
    comercial: number = 0;
    financeiro: number = 0;
    operacional: number = 0;
    recursosHumanos: number = 0;
    ti: number = 0;
    periodo: string;
}

@Injectable()
export class GraficoCrescimentoService {
    public getInvestimentoPorArea(itensCache: Array<PropostaDashboard>): AreaChartValues[] {

        const dadosFinanceiros = itensCache
            .filter(x => x.status === Util.STATUS_APROVADA)
            .map(x => x.dadosFinanceiros
                .map(y => Object.assign({ area: x.area }, y)))
            .reduce((a, b) => a.concat(b));

        // tslint:disable-next-line: max-line-length
        const arrayMeses = [Util.MES_JANEIRO, Util.MES_FEVEREIRO, Util.MES_MARCO, Util.MES_ABRIL, Util.MES_MAIO, Util.MES_JUNHO, Util.MES_JULHO, Util.MES_AGOSTO, Util.MES_SETEMBRO, Util.MES_OUTUBRO, Util.MES_NOVEMBRO, Util.MES_DEZEMBRO];

        const dadosAgrupados = [];
        for (const nomeMes of arrayMeses) {
            for (const item of dadosFinanceiros) {
                if (item.mes.toUpperCase() === nomeMes.toUpperCase()) {
                    const itemExistente = dadosAgrupados.filter(x => x.ano === item.ano && x.mes === nomeMes && x.area === item.area);
                    if (itemExistente.length > 0) {
                        itemExistente[0].valor += item.valor as number;
                    } else {
                        dadosAgrupados.push({
                            ano: item.ano,
                            mes: nomeMes,
                            area: item.area,
                            valor: item.valor as number
                        });
                    }
                }
            }
        }
        const investimentoAreasData = new Array<AreaChartValues>();

        for (const nomeMes of arrayMeses) {
            const obj = new AreaChartValues();
            obj.periodo = nomeMes;
            const adm = dadosAgrupados.filter((y) => y.area === Util.AREA_ADMINISTRATIVO && y.mes === nomeMes);
            const com = dadosAgrupados.filter((y) => y.area === Util.AREA_COMERCIAL && y.mes === nomeMes);
            const fin = dadosAgrupados.filter((y) => y.area === Util.AREA_FINANCEIRO && y.mes === nomeMes);
            const ope = dadosAgrupados.filter((y) => y.area === Util.AREA_OPERACIONAL && y.mes === nomeMes);
            const rh = dadosAgrupados.filter((y) => y.area === Util.AREA_RH && y.mes === nomeMes);
            const ti = dadosAgrupados.filter((y) => y.area === Util.AREA_TI && y.mes === nomeMes);

            if (adm.length > 0) {
                obj.administrativo = adm[0].valor ? adm[0].valor : 0;
            }

            if (com.length > 0) {
                obj.comercial = com[0].valor ? com[0].valor : 0;
            }

            if (fin.length > 0) {
                obj.financeiro = fin[0].valor ? fin[0].valor : 0;
            }

            if (ope.length > 0) {
                obj.operacional = ope[0].valor ? ope[0].valor : 0;
            }

            if (rh.length > 0) {
                obj.recursosHumanos = rh[0].valor ? rh[0].valor : 0;
            }

            if (ti.length > 0) {
                obj.ti = ti[0].valor ? ti[0].valor : 0;
            }

            investimentoAreasData.push(obj);
        }
        return investimentoAreasData;
    }
}
