import { Component, OnInit } from '@angular/core';
import { ListagemService } from './listagem.service';
import { Proposta } from 'src/app/shared/proposta.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  providers: [ListagemService]
})
export class ListagemComponent implements OnInit {
  public propostas: Array<Proposta>;

  constructor(private listagemService: ListagemService) { }

  ngOnInit() {
    this.propostas = this.listagemService.getAll();
  }

}
