import { Component, OnInit} from '@angular/core';
import { PropostaDashboard } from '../shared/proposta.dashboard.model';
import { PropostaService } from '../proposta.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 public propostas: Array<PropostaDashboard>;
 public itensPropostaCache: Array<PropostaDashboard>;
 public filtro: FormGroup = new FormGroup({
  'area': new FormControl('Todas'),
  'status': new FormControl('Todos'),
});

  constructor(private propostaService: PropostaService) { }

  ngOnInit() {
    this.propostaService.getAll().then((itens) =>{
        this.itensPropostaCache = itens;
        this.propostas = itens;
    });
  }

  public filtrar():void{
     let filtroArea = this.filtro.value.area;
     let filtroStatus = this.filtro.value.status;
console.log(filtroArea);
console.log(filtroStatus);
    this.itensPropostaCache = this.propostas.filter((item) => {
      return ((filtroArea == 'Todas' || item.area == filtroArea) &&
              (filtroStatus == 'Todos' || item.status == filtroStatus));
    })
  }
}
