import { Component, OnInit } from '@angular/core';
import { PropostaService } from '../../proposta.service';
import { PropostaDashboard } from 'src/app/shared/proposta.dashboard.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  providers: [PropostaService]
})
export class ListagemComponent implements OnInit {
  public propostas: Array<PropostaDashboard>;

  constructor(private listagemService: PropostaService) { }

  ngOnInit() {
    this.listagemService.getAll().then((itens) => {
      this.propostas = itens;
    });
  }

}
