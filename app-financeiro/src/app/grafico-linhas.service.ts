import { Injectable } from '@angular/core';

export class DataChart {
    mesAno: string;
    valorOperacional: number;
    valorComercial: number;
    valorFinanceiro: number;
    valorInfraestrutura: number;
}

export class Area {
    value: string;
    name: string;
}

let areas: Area[] = [
    { value: 'valorOperacional', name: 'Operacional' },
    { value: 'valorFinanceiro', name: 'Financeiro' },
    { value: 'valorComercial', name: 'Comercial' },
    { value: 'valorInfraestrutura', name: 'Infraestrutura' },
];

let dataChart: DataChart[] = [
    { mesAno: '01/2019', valorOperacional: 100000, valorComercial: 90000, valorFinanceiro: 50000, valorInfraestrutura: 85000 },
    { mesAno: '02/2019', valorOperacional: 110000, valorComercial: 80000, valorFinanceiro: 40000, valorInfraestrutura: 75000 },
    { mesAno: '03/2019', valorOperacional: 120000, valorComercial: 70000, valorFinanceiro: 30000, valorInfraestrutura: 75000 },
    { mesAno: '04/2019', valorOperacional: 140000, valorComercial: 60000, valorFinanceiro: 35000, valorInfraestrutura: 65000 },
    { mesAno: '05/2019', valorOperacional: 130000, valorComercial: 80000, valorFinanceiro: 40000, valorInfraestrutura: 65000 },
    { mesAno: '06/2019', valorOperacional: 120000, valorComercial: 90000, valorFinanceiro: 50000, valorInfraestrutura: 75000 },
    { mesAno: '07/2019', valorOperacional: 140000, valorComercial: 90000, valorFinanceiro: 60000, valorInfraestrutura: 85000 },
    { mesAno: '08/2019', valorOperacional: 160000, valorComercial: 85000, valorFinanceiro: 70000, valorInfraestrutura: 95000 },
    { mesAno: '09/2019', valorOperacional: 180000, valorComercial: 80000, valorFinanceiro: 70000, valorInfraestrutura: 85000 },
    { mesAno: '10/2019', valorOperacional: 170000, valorComercial: 70000, valorFinanceiro: 60000, valorInfraestrutura: 75000 },
    { mesAno: '11/2019', valorOperacional: 190000, valorComercial: 60000, valorFinanceiro: 60000, valorInfraestrutura: 65000 },
    { mesAno: '12/2019', valorOperacional: 200000, valorComercial: 75000, valorFinanceiro: 50000, valorInfraestrutura: 75000 }
];

export class GraficoLinhasService {
    getAreas(): Area[] {
        return areas;
    }
    getDataSource(): DataChart[] {
        return dataChart;
    }
}