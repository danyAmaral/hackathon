import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PropostaDashboard } from 'src/app/shared/proposta.dashboard.model';
import { STATUS_RASCUNHO, STATUS_AGUARDANDOAPROVACAO, STATUS_REPROVADA, STATUS_APROVADA } from 'src/app/shared/util.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public itensPropostaCache;

  public propostasRascunho: number = 0;
  public propostasAprovadas: number = 0;
  public propostasRecusadas: number = 0;
  public propostasAguardandoAprovacao: number = 0;
  constructor() {

  }

  ngOnInit() {
    this.iniciar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itensPropostaCache = changes.itensPropostaCache.currentValue;
    this.iniciar();
  }

  public iniciar() {
    if (this.itensPropostaCache) {
      this.preencherTotalizadores(this.itensPropostaCache);
    }
  }

  preencherTotalizadores(itensCache: Array<PropostaDashboard>) {
    this.propostasRascunho = itensCache.filter(x => { return x.status == STATUS_RASCUNHO; }).length;
    this.propostasAprovadas = itensCache.filter(x => { return x.status == STATUS_APROVADA; }).length;
    this.propostasRecusadas = itensCache.filter(x => { return x.status == STATUS_REPROVADA; }).length;
    this.propostasAguardandoAprovacao = itensCache.filter(x => { return x.status == STATUS_AGUARDANDOAPROVACAO; }).length;
  }
}
