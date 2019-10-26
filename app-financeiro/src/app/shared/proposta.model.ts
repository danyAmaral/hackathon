import { DadosFinanceiros } from './dados-financeiros.model';

export class Proposta{
    public id:number;
    public titulo:string;
    public descricao:string;
    public area:string;
    public urgente:boolean;
    public status:string;
    public dadosFinanceiros: Array<DadosFinanceiros>
}