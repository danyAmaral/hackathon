import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { GraficoSetorService, DataChart } from '../../grafico-setor.service';

@Component({
  selector: 'app-grafico-setor',
  templateUrl: './grafico-setor.component.html',
  styleUrls: ['./grafico-setor.component.css'],
  providers: [GraficoSetorService]
})
export class GraficoSetorComponent implements OnInit {
  pipeCurrency: any = new CurrencyPipe('en-US');

  dataSource: DataChart[];

  constructor(private service: GraficoSetorService) {
    this.dataSource = this.service.getInvestimentoPorArea();
  }

  customizeTooltip = (arg: any) => {
    return {
        text: 'Propostas aprovadas: ' + arg.valueText + ' - ' + this.pipeCurrency.transform(arg.point.data.tag)
    };
}

  ngOnInit() {
  }

}
