import { Injectable } from '@angular/core';
import { PropostaService } from './proposta.service';
import { PropostaDashboard } from './shared/proposta.dashboard.model';

export class DataChart {
    setor: string;
    val: number;
}

@Injectable()
export class GraficoSetorService {
    constructor(private propostaService: PropostaService){}
    public getInvestimentoPorArea(itensCache: Array<PropostaDashboard>): DataChart[] {
        let itensAdm = itensCache.filter(x => { return x.area == "Administrativo";});
        let itensCom = itensCache.filter(x => { return x.area == "Comercial"; });
        let itensFin = itensCache.filter(x => { return x.area == "Financeiro";});
        let itensOpe = itensCache.filter(x => { return x.area == "Operacional"; });
        let itensRH =  itensCache.filter(x => { return x.area == "Recursos Humanos";});
        let itensTI =  itensCache.filter(x => { return x.area == "TI"; });
            

        const total = itensCache.length;
        const dataSource: DataChart[] = [
            { setor: 'Administrativo', val: this.calcularPercentual(itensAdm.length, total)   },
            { setor: 'Comercial', val:  this.calcularPercentual(itensCom.length, total)},
            { setor: 'Financeiro', val:  this.calcularPercentual(itensFin.length, total) },
            { setor: 'Operacional', val:  this.calcularPercentual(itensOpe.length, total) },
            { setor: 'Recursos Humanos', val:  this.calcularPercentual(itensRH.length, total)},
            { setor: 'TI', val:  this.calcularPercentual(itensTI.length, total) }
        ];
        return dataSource;
  
    }
    
    public calcularPercentual(valor, total){
        return Math.round((100 * valor) / total)
    }
    

}
