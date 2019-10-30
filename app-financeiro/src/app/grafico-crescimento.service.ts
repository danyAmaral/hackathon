import { Injectable } from '@angular/core';
import { Proposta } from './shared/proposta.model'
import { DadosFinanceiros } from './shared/dados-financeiros.model'

export class AreaChartValues {
    operacional: number;
    financeiro: number;
    infraestrutura: number;
    comercial: number;
    ano: number;
    mes: number;
    periodo: string;    
}

@Injectable()
export class GraficoCrescimentoService {
    public getInvestimentoPorArea(): AreaChartValues[] {
        let investimentoAreasData: AreaChartValues[] = [
            { ano: 2019, mes: 1, periodo: '01/2019', operacional: 100000, comercial: 90000, financeiro: 50000, infraestrutura: 85000 },
            { ano: 2019, mes: 2, periodo: '02/2019', operacional: 110000, comercial: 80000, financeiro: 40000, infraestrutura: 75000 },
            { ano: 2019, mes: 3, periodo: '03/2019', operacional: 120000, comercial: 70000, financeiro: 30000, infraestrutura: 75000 },
            { ano: 2019, mes: 4, periodo: '04/2019', operacional: 140000, comercial: 60000, financeiro: 35000, infraestrutura: 65000 },
            { ano: 2019, mes: 5, periodo: '05/2019', operacional: 130000, comercial: 80000, financeiro: 40000, infraestrutura: 65000 },
            { ano: 2019, mes: 6, periodo: '06/2019', operacional: 120000, comercial: 90000, financeiro: 50000, infraestrutura: 75000 },
            { ano: 2019, mes: 7, periodo: '07/2019', operacional: 140000, comercial: 100000, financeiro: 60000, infraestrutura: 85000 },
            { ano: 2019, mes: 8, periodo: '08/2019', operacional: 160000, comercial: 85000, financeiro: 70000, infraestrutura: 95000 },
            { ano: 2019, mes: 9, periodo: '09/2019', operacional: 180000, comercial: 80000, financeiro: 70000, infraestrutura: 85000 },
            { ano: 2019, mes: 10, periodo: '10/2019', operacional: 170000, comercial: 70000, financeiro: 60000, infraestrutura: 75000 },
            { ano: 2019, mes: 11, periodo: '11/2019', operacional: 190000, comercial: 60000, financeiro: 60000, infraestrutura: 65000 },
            { ano: 2019, mes: 12, periodo: '12/2019', operacional: 200000, comercial: 75000, financeiro: 50000, infraestrutura: 75000 }
        ];

        return investimentoAreasData;
    }
}