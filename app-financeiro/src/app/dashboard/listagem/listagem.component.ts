import { Component, Input, SimpleChanges } from '@angular/core';
import { PropostaService } from '../../proposta.service';
import { PropostaDashboard } from 'src/app/shared/proposta.dashboard.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  providers: [PropostaService]
})
export class ListagemComponent {
  @Input() public itensPropostaCache;

  public propostas: Array<PropostaDashboard>;

  constructor(private listagemService: PropostaService) {
    this.iniciar();
   }

  ngOnChanges(changes: SimpleChanges) {
    this.itensPropostaCache = changes.itensPropostaCache.currentValue;
    this.iniciar();
  }

  public iniciar() {
    if (this.itensPropostaCache) {
        this.propostas = this.itensPropostaCache;
    }
  }

}
