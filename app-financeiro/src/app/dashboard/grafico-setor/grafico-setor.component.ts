import { Component, Input, SimpleChanges } from '@angular/core';
import { GraficoSetorService, DataChart } from '../../grafico-setor.service';

@Component({
  selector: 'app-grafico-setor',
  templateUrl: './grafico-setor.component.html',
  styleUrls: ['./grafico-setor.component.css'],
  providers: [GraficoSetorService]
})
export class GraficoSetorComponent {
  @Input() public itensPropostaCache;

  dataSource: DataChart[];

  constructor(private service: GraficoSetorService) {
    this.iniciar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itensPropostaCache = changes.itensPropostaCache.currentValue;
    this.iniciar();
  }

  public iniciar() {
    if (this.itensPropostaCache) {
      this.dataSource = this.service.getInvestimentoPorArea(this.itensPropostaCache);
    }
  }
}
