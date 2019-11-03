import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PropostaDashboard } from 'src/app/shared/proposta.dashboard.model';
import * as Util from 'src/app/shared/util.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public itensPropostaCache;
  @Input() public anoSeleciono;

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

    const propostasRascunho = itensCache.filter(x => x.status === Util.STATUS_RASCUNHO);
    const propostasAprovadas = itensCache.filter(x => x.status === Util.STATUS_APROVADA);
    const propostasRecusadas = itensCache.filter(x => x.status === Util.STATUS_REPROVADA);
    const propostasAguardandoAprovacao = itensCache.filter(x => x.status === Util.STATUS_AGUARDANDOAPROVACAO);

    let valorTotalRascunho: number = 0;
    let valorTotalAprovada: number = 0;
    let valorTotalRecusada: number = 0;
    let valorTotalAguardandoAprovacao: number = 0;

    for (let i = 0; i < propostasRascunho.length; i++){
      let dadosFinanceiros = propostasRascunho[i].dadosFinanceiros.filter(x => x.ano == this.anoSeleciono);
      if(dadosFinanceiros)
      {
        for(let j = 0; j< dadosFinanceiros.length; j ++)
        {
          valorTotalRascunho += dadosFinanceiros[j].valor;
        }
      }
    }
    for (let i = 0; i < propostasAprovadas.length; i++){
      let dadosFinanceiros = propostasAprovadas[i].dadosFinanceiros.filter(x => x.ano == this.anoSeleciono);
      if(dadosFinanceiros)
      {
        for(let j = 0; j< dadosFinanceiros.length; j ++)
        {
          valorTotalAprovada += dadosFinanceiros[j].valor;
        }
      }
    }

    for (let i = 0; i < propostasRecusadas.length; i++){
      let dadosFinanceiros = propostasRecusadas[i].dadosFinanceiros.filter(x => x.ano == this.anoSeleciono);
      if(dadosFinanceiros)
      {
        for(let j = 0; j< dadosFinanceiros.length; j ++)
        {
          valorTotalRecusada += dadosFinanceiros[j].valor;
        }
      }
    }

    for (let i = 0; i < propostasAguardandoAprovacao.length; i++){
      let dadosFinanceiros = propostasAguardandoAprovacao[i].dadosFinanceiros.filter(x => x.ano == this.anoSeleciono);
      if(dadosFinanceiros)
      {
        for(let j = 0; j< dadosFinanceiros.length; j ++)
        {
          valorTotalAguardandoAprovacao += dadosFinanceiros[j].valor;
        }
      }
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
