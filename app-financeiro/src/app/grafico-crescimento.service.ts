import { Injectable, ɵConsole } from '@angular/core';
import { Proposta } from './shared/proposta.model'
import { DadosFinanceiros } from './shared/dados-financeiros.model'
import { PropostaDashboard } from './shared/proposta.dashboard.model';

export class AreaChartValues {
    ano: number;
    valor: number;
    area: string;    
}

@Injectable()
export class GraficoCrescimentoService {
    public getInvestimentoPorArea(itensCache: Array<PropostaDashboard>): AreaChartValues[] {
        console.log('getInvestimentoPorArea');

        let dadosFinanceiros = itensCache.map(x => x.dadosFinanceiros.map(y => Object.assign({ area: x.area }, y)))
		                                 .reduce((a, b) => a.concat(b))
 
     //   let anos = dadosFinanceiros.filter(y=> { return  y.dadosFinanceiros.})
     
     console.log("----");
     console.log(dadosFinanceiros);
     console.log("----");

        let investimentoAreasData: AreaChartValues[] = [
            { ano: 2019, valor: 1000 , area: "Financeira" },
            { ano: 2019, valor: 1000 , area: "Comercial" },
            { ano: 2019, valor: 1000 , area: "TI" },
        ];

        return investimentoAreasData;
    }
}