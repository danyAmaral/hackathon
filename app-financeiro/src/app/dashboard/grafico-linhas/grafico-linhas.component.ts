import { Component, OnInit } from '@angular/core';
import { GraficoLinhasService, DataChart, Area } from '../../grafico-linhas.service'
import { PropostaService } from 'src/app/proposta.service';

@Component({
  selector: 'app-grafico-linhas',
  templateUrl: './grafico-linhas.component.html',
  styleUrls: ['./grafico-linhas.component.css'],
  providers: [GraficoLinhasService, PropostaService]
})
export class GraficoLinhasComponent implements OnInit {

  types: string[] = ['line', 'stackedline', 'fullstackedline'];
  dataSource: DataChart[];
  areas: Area[];

  // @Input() public itensPropostaCache;


  constructor(private service: GraficoLinhasService) { }


  ngOnInit() {
    this.dataSource = this.service.getDataSource();
    this.areas = this.service.getAreas();
  }

}
