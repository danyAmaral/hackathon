import { DadosFinanceirosDashboard } from './dados-financeiros-dashboard.model';

export class PropostaDashboard{
    public id:number;
    public titulo:string;
    public area:string;
    public status:string;
    public valorTotal: number;
    public dadosFinanceiros: Array<DadosFinanceirosDashboard>;
}