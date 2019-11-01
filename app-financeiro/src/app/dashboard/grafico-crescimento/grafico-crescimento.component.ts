import { Component, OnInit, NgModule, enableProdMode, Input } from '@angular/core';
import { GraficoCrescimentoService, AreaChartValues } from '../../grafico-crescimento.service';

@Component({
  selector: 'app-grafico-crescimento',
  templateUrl: './grafico-crescimento.component.html',
  styleUrls: ['./grafico-crescimento.component.css'],
  providers: [GraficoCrescimentoService]
})


export class GraficoCrescimentoComponent implements OnInit {
  
  @Input() public itensPropostaCache;

  areasData: AreaChartValues[];
  types: string[] = ['area', 'stackedarea', 'fullstackedarea'];
  
  constructor(private service: GraficoCrescimentoService) {
    this.areasData = service.getInvestimentoPorArea();
  }

  ngOnInit() {
  }

}

