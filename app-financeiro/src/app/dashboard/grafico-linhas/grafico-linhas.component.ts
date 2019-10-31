import { Component, OnInit } from '@angular/core';
import { GraficoLinhasService, CountryInfo, EnergyDescription } from '../../grafico-linhas.service'

@Component({
  selector: 'app-grafico-linhas',
  templateUrl: './grafico-linhas.component.html',
  styleUrls: ['./grafico-linhas.component.css'],
  providers: [GraficoLinhasService]
})
export class GraficoLinhasComponent implements OnInit {

  types: string[] = ["line", "stackedline", "fullstackedline"];
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];

  constructor(private service: GraficoLinhasService) { }


  ngOnInit() {
    this.countriesInfo = this.service.getCountriesInfo();
    this.energySources = this.service.getEnergySources();
  }

}
