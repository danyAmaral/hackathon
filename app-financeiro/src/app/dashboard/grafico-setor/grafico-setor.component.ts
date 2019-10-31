import { Component, OnInit, NgModule, enableProdMode, Input, SimpleChanges } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { GraficoSetorService, DataChart } from '../../grafico-setor.service';
import { PropostaService } from 'src/app/proposta.service';
import { PropostaDashboard } from 'src/app/shared/proposta.dashboard.model';

@Component({
  selector: 'app-grafico-setor',
  templateUrl: './grafico-setor.component.html',
  styleUrls: ['./grafico-setor.component.css'],
  providers: [GraficoSetorService]
})
export class GraficoSetorComponent implements OnInit {
  pipeCurrency: any = new CurrencyPipe('en-US');

  @Input() public itensPropostaCache;

  dataSource: DataChart[];

  constructor(private service: GraficoSetorService, private propostaService: PropostaService) {
    this.iniciar();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.itensPropostaCache = changes.itensPropostaCache.currentValue;
    console.log('entrei no change')
    console.log(this.itensPropostaCache)
    this.iniciar();
  }

  public iniciar(){
    this.propostaService.getAll().then( (resposta) => {
      this.dataSource = this.service.getInvestimentoPorArea(resposta);
    })
  }
  customizeTooltip = (arg: any) => {
    return {
        text: 'Propostas aprovadas: ' + arg.valueText + ' - ' + this.pipeCurrency.transform(arg.point.data.tag)
    };
}

  ngOnInit() {
  }

}
