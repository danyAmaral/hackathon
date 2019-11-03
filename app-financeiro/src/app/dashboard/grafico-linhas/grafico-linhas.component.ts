import { Component, SimpleChanges, Input } from '@angular/core';
import { GraficoLinhasService, DataChart, Area } from '../../grafico-linhas.service';

@Component({
  selector: 'app-grafico-linhas',
  templateUrl: './grafico-linhas.component.html',
  styleUrls: ['./grafico-linhas.component.css'],
  providers: [ GraficoLinhasService ]
})
export class GraficoLinhasComponent {
  @Input() public itensPropostaCache;
  @Input() public anoSeleciono;
  dataSource: DataChart[];
  areas: Area[];

  constructor(private service: GraficoLinhasService) {
    this.iniciar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itensPropostaCache = changes.itensPropostaCache.currentValue;
    this.iniciar();
  }

  public iniciar() {
    if (this.itensPropostaCache) {
      this.dataSource = this.service.getDataSource(this.itensPropostaCache, this.anoSeleciono);
      this.areas = this.service.getAreas();
    }
  }
}
