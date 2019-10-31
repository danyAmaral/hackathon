import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';
import { Proposta } from '../../shared/proposta.model'
import { GraficoCrescimentoService, AreaChartValues } from '../../grafico-crescimento.service';
import { DadosFinanceiros } from 'src/app/shared/dados-financeiros.model';


@Component({
  selector: 'app-grafico-crescimento',
  templateUrl: './grafico-crescimento.component.html',
  styleUrls: ['./grafico-crescimento.component.css'],
  providers: [GraficoCrescimentoService]
})
export class GraficoCrescimentoComponent implements OnInit {

  areasData: AreaChartValues[];
  types: string[] = ['area', 'stackedarea', 'fullstackedarea'];
  
  constructor(private service: GraficoCrescimentoService) {
    this.areasData = service.getInvestimentoPorArea();
  }

  ngOnInit() {
  }

  // customizeTooltip = (info: any) => {
  //   return {
  //     html: "<div><div class='tooltip-header'>" +
  //       info.argumentText + "</div>" +
  //       "<div class='tooltip-body'><div class='series-name'>" +
  //       info.points[0].seriesName +
  //       ": </div><div class='value-text'>" +
  //       info.points[0].valueText +
  //       "</div><div class='series-name'>" +
  //       info.points[1].seriesName +
  //       ": </div><div class='value-text'>" +
  //       info.points[1].valueText +
  //       "</div></div></div>"
  //   };
  // }

  // customizeLabelText = (info: any) => {
  //   return "R$ " + info.valueText;
  // }
}

