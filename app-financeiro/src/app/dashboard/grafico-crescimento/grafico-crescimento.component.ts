import { Component, OnInit, NgModule, enableProdMode, Input, SimpleChanges } from '@angular/core';
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
  }

  ngOnInit() {
    this.iniciar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itensPropostaCache = changes.itensPropostaCache.currentValue;
    this.iniciar();
  }

  public iniciar(){
    if(this.itensPropostaCache)
      this.areasData = this.service.getInvestimentoPorArea(this.itensPropostaCache);
    else
      this.areasData = new AreaChartValues[1];
  }

}

