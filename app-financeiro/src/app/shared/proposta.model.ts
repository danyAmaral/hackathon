import { DadosFinanceiros } from './dados-financeiros.model';

export class Proposta {
    public id: number;
    public titulo: string;
    public descricao: string;
    public area: string;
    public status: string;
    public dataInicio: Date;
    public dataTermino: Date;
    public dadosFinanceiros: Array<DadosFinanceiros>;
}
