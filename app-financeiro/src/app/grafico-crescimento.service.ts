import { Injectable } from '@angular/core';
import { Proposta } from './shared/proposta.model'
import { DadosFinanceiros } from './shared/dados-financeiros.model'
import { PropostaDashboard } from './shared/proposta.dashboard.model';
import { AREA_RH, AREA_TI, AREA_OPERACIONAL, AREA_FINANCEIRO, AREA_COMERCIAL, AREA_ADMINISTRATIVO, MES_JANEIRO,
         MES_FEVEREIRO, MES_MARCO, MES_ABRIL, MES_MAIO, MES_JUNHO, MES_JULHO, MES_AGOSTO, MES_SETEMBRO, MES_OUTUBRO, 
         MES_NOVEMBRO, MES_DEZEMBRO } from './shared/util.model';

export class AreaChartValues {
    administrativo: number =0;
    comercial: number =0;
    financeiro: number =0;
    operacional: number =0;
    recursosHumanos: number=0;
    ti: number=0;
    periodo: string;
}

@Injectable()
export class GraficoCrescimentoService {
    public getInvestimentoPorArea(itensCache: Array<PropostaDashboard>): AreaChartValues[] {

        let dadosFinanceiros = itensCache.map(x => x.dadosFinanceiros
            .map(y => Object.assign({ area: x.area }, y)))
            .reduce((a, b) => a.concat(b));

       let arrayMeses= [MES_JANEIRO, MES_FEVEREIRO, MES_MARCO, MES_ABRIL, MES_MAIO, MES_JUNHO, MES_JULHO, MES_AGOSTO, MES_SETEMBRO, MES_OUTUBRO, MES_NOVEMBRO, MES_DEZEMBRO];
     
        const dadosAgrupados = [];

        for (const nomeMes of arrayMeses) {
            for (const item of dadosFinanceiros) {
                const itemExistente = dadosAgrupados.filter(x => x.ano === item.ano && x.mes === nomeMes && x.area === item.area);
                if (itemExistente.length > 0) {
                    itemExistente[0].valor += <number>item.valor;
                } else {
                    dadosAgrupados.push({
                        ano: item.ano,
                        mes: nomeMes,
                        area: item.area,
                        valor: <number>item.valor
                    });
                }
            }
        }
        let investimentoAreasData = new Array<AreaChartValues>();

       for (const nomeMes of arrayMeses) {
            let obj = new AreaChartValues(); 
            obj.periodo = nomeMes;
            let adm = dadosAgrupados.filter((y) =>{  return y.area == AREA_ADMINISTRATIVO && y.mes == nomeMes });
            let com = dadosAgrupados.filter((y) =>{  return y.area == AREA_COMERCIAL && y.mes == nomeMes });
            let fin = dadosAgrupados.filter((y) =>{  return y.area == AREA_FINANCEIRO && y.mes == nomeMes });
            let ope = dadosAgrupados.filter((y) =>{  return y.area == AREA_OPERACIONAL && y.mes == nomeMes });
            let rh = dadosAgrupados.filter((y) =>{  return y.area == AREA_RH && y.mes == nomeMes });
            let ti = dadosAgrupados.filter((y) =>{  return y.area == AREA_TI && y.mes == nomeMes });

            if(adm.length> 0){
                obj.administrativo =  adm[0].valor ? adm[0].valor : 0;
            }
                
            if(com.length> 0){
                obj.comercial =  com[0].valor ? com[0].valor : 0; 
            }
               
            if(fin.length> 0){
                obj.financeiro =  fin[0].valor ? fin[0].valor : 0; 
            }

            if(ope.length> 0){
                obj.operacional =  ope[0].valor ? ope[0].valor : 0; 
            }
               
            if(rh.length> 0){
                obj.recursosHumanos =  rh[0].valor ? rh[0].valor : 0; 
            }

            if(ti.length> 0){
                obj.ti =  ti[0].valor ? ti[0].valor : 0; 
            }

            investimentoAreasData.push(obj);
       }

        return investimentoAreasData;
    }
}