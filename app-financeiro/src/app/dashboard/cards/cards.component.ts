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

  public propostasRascunhoQtd: number = 0;
  public propostasAprovadasQtd: number = 0;
  public propostasRecusadasQtd: number = 0;
  public propostasAguardandoAprovacaoQtd: number = 0;

  public propostasRascunhoValor: number = 0;
  public propostasAprovadasValor: number = 0;
  public propostasRecusadasValor: number = 0;
  public propostasAguardandoAprovacaoValor: number = 0;

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
    let propostasRascunho = itensCache.filter(x => { return x.status == STATUS_RASCUNHO; })
    let propostasAprovadas = itensCache.filter(x => { return x.status == STATUS_APROVADA; })
    let propostasRecusadas = itensCache.filter(x => { return x.status == STATUS_REPROVADA; })
    let propostasAguardandoAprovacao = itensCache.filter(x => { return x.status == STATUS_AGUARDANDOAPROVACAO; })

    let valorTotalRascunho: number = 0;
    let valorTotalAprovada: number = 0;
    let valorTotalRecusada: number = 0;
    let valorTotalAguardandoAprovacao: number = 0;

    for (let i = 0; i < propostasRascunho.length; i++){
      valorTotalRascunho = valorTotalRascunho + propostasRascunho[i].valorTotal;
    }
    for (let i = 0; i < propostasAprovadas.length; i++){
      valorTotalAprovada = valorTotalAprovada + propostasAprovadas[i].valorTotal;
    }
    for (let i = 0; i < propostasRecusadas.length; i++){
      valorTotalRecusada = valorTotalRecusada + propostasRecusadas[i].valorTotal;
    }
    for (let i = 0; i < propostasAguardandoAprovacao.length; i++){
      valorTotalAguardandoAprovacao = valorTotalAguardandoAprovacao + propostasAguardandoAprovacao[i].valorTotal;
    }

    this.propostasRascunhoQtd = propostasRascunho.length;
    this.propostasAprovadasQtd = propostasAprovadas.length;
    this.propostasRecusadasQtd = propostasRecusadas.length;
    this.propostasAguardandoAprovacaoQtd = propostasAguardandoAprovacao.length;

    this.propostasRascunhoValor = valorTotalRascunho;
    this.propostasAprovadasValor = valorTotalAprovada;
    this.propostasRecusadasValor = valorTotalRecusada;
    this.propostasAguardandoAprovacaoValor = valorTotalAguardandoAprovacao;
  }
}
