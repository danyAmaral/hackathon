import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PropostaDashboard } from 'src/app/shared/proposta.dashboard.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public itensPropostaCache;

  public propostasRascunho:number = 0;
  public propostasAprovadas:number = 0;
  public propostasRecusadas:number = 0;
  public propostasAguardandoAprovacao:number = 0;
  constructor() {

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
    {
      this.preencherTotalizadores(this.itensPropostaCache);
    }
  }

  preencherTotalizadores(itensCache: Array<PropostaDashboard>){
    console.log('preencherTotalizadores')
    let a= itensCache.filter(x => { return x.status == "Rascunho";});
      this.propostasRascunho = itensCache.filter(x => { return x.status == "Rascunho";}).length;
      this.propostasAprovadas = itensCache.filter(x => { return x.status == "Aprovada";}).length;
      this.propostasRecusadas = itensCache.filter(x => { return x.status == "Reprovada";}).length;
      this.propostasAguardandoAprovacao = itensCache.filter(x => { return x.status == "Aguardando Aprovação";}).length;
      console.log(this.propostasRascunho)
  }
}
