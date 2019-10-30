import { Injectable } from '@angular/core';

export class DataChart {
    setor: string;
    val: number;
    tag: number;
}

@Injectable()
export class GraficoSetorService {

    public getInvestimentoPorArea(): DataChart[] {
        const dataSource: DataChart[] = [
            { setor: 'Operacional', val: 41, tag: 987213 },
            { setor: 'Comercial', val: 23, tag: 422365 },
            { setor: 'Financeiro', val: 34, tag: 644521 },
            { setor: 'Infraestrutura', val: 29, tag: 598741 }
        ];

        return dataSource;
    }
}