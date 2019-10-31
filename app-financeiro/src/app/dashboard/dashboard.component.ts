import { Component, OnInit} from '@angular/core';
import { PropostaDashboard } from '../shared/proposta.dashboard.model';
import { PropostaService } from '../proposta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 public propostas: Array<PropostaDashboard>;
 public itensPropostaCache: Array<PropostaDashboard>;

  constructor(private propostaService: PropostaService) { }

  ngOnInit() {
    this.propostaService.getAll().then((itens) =>{
        this.itensPropostaCache = itens;
        this.propostas = itens;
    });
  }

  public filtrar():void{
    this.itensPropostaCache = this.propostas.filter((item) => {return item.area == 'Recursos Humanos'})
  }
}
