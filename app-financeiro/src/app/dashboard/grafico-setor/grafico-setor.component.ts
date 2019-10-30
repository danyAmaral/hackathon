import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { GraficoSetorService, DataChart } from '../../grafico-setor.service';
import { PropostaService } from 'src/app/proposta.service';

@Component({
  selector: 'app-grafico-setor',
  templateUrl: './grafico-setor.component.html',
  styleUrls: ['./grafico-setor.component.css'],
  providers: [GraficoSetorService]
})
export class GraficoSetorComponent implements OnInit {
  pipeCurrency: any = new CurrencyPipe('en-US');

  dataSource: DataChart[];

  constructor(private service: GraficoSetorService, private propostaService: PropostaService) {
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
