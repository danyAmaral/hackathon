import { Component, OnInit, NgModule, enableProdMode, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { GraficoSetorService, DataChart } from '../../grafico-setor.service';
import { PropostaDashboard } from 'src/app/shared/proposta.dashboard.model';

@Component({
  selector: 'app-grafico-setor',
  templateUrl: './grafico-setor.component.html',
  styleUrls: ['./grafico-setor.component.css'],
  providers: [GraficoSetorService]
})
export class GraficoSetorComponent {
  pipeCurrency: any = new CurrencyPipe('en-US');

  @Input() public itensPropostaCache;

  dataSource: DataChart[];

  constructor(private service: GraficoSetorService) {
    this.iniciar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itensPropostaCache = changes.itensPropostaCache.currentValue;
    console.log('entrei no change');
    console.log(this.itensPropostaCache);
    this.iniciar();
  }

  public iniciar() {
    if (this.itensPropostaCache) {
      this.dataSource = this.service.getInvestimentoPorArea(this.itensPropostaCache);
    }
  }
}
