import { Injectable } from '@angular/core';
import { PropostaService } from './proposta.service';
import { PropostaDashboard } from './shared/proposta.dashboard.model';

export class DataChart {
    setor: string;
    val: number;
    tag: number;
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
             
        let valorAdm = 0;
        let valorOpe = 0;
        let valorCom = 0;
        let valorFin = 0;
        let valorRH = 0;
        let valorTI = 0;

        for(let i= 0; i< itensCache.length; i++) 
        {
            if(itensCache[i].area == "Administrativo")
                valorAdm += itensCache[i].valorTotal;
            else if(itensCache[i].area == "Comercial")
                valorCom +=itensCache[i].valorTotal;
            else if(itensCache[i].area == "Financeiro")
                valorFin += itensCache[i].valorTotal;
            else if(itensCache[i].area == "Operacional")
                 valorOpe += itensCache[i].valorTotal;
            else if(itensCache[i].area == "Recursos Humanos")
                valorRH += itensCache[i].valorTotal;
            else if(itensCache[i].area == "TI")
                 valorTI += itensCache[i].valorTotal;
        }
   
        const dataSource: DataChart[] = [
            { setor: 'Administrativo', val: itensAdm.length, tag: valorAdm },
            { setor: 'Comercial', val: itensCom.length, tag: valorCom },
            { setor: 'Financeiro', val: itensFin.length, tag: valorFin },
            { setor: 'Operacional', val: itensOpe.length, tag: valorOpe},
            { setor: 'Recursos Humanos', val: itensRH.length, tag: valorRH },
            { setor: 'TI', val: itensTI.length, tag: valorTI }
        ];
        return dataSource;
  
    }  
}
