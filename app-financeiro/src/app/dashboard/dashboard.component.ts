import { Component, OnInit, Input, Output } from '@angular/core';
import { PropostaDashboard } from '../shared/proposta.dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() public itensPropostaCache: Array<PropostaDashboard>;

  constructor() { }

  ngOnInit() {
  }

}
