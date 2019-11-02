import { Component, OnInit } from '@angular/core';
import { PropostaDashboard } from '../shared/proposta.dashboard.model';
import { PropostaService } from '../proposta.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as Util from '../shared/util.model';
import { utils } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public listAreas = [];
  public selectedAreas = [];
  public listStatus = [];
  public selectedStatus = [];
  public listAnos = [];
  public selectedAno = [];
  public dropdownSettings: IDropdownSettings = {};
  public ddAnoSettings: IDropdownSettings = {};

  public propostas: Array<PropostaDashboard>;
  public itensPropostaCache: Array<PropostaDashboard>;
  public filtro: FormGroup = new FormGroup({
    ano: new FormControl(),
    area: new FormControl(),
    status: new FormControl()
  });

  constructor(private propostaService: PropostaService) { }

  ngOnInit() {
    this.listAreas = [
      { item_id: 1, item_text: Util.AREA_ADMINISTRATIVO},
      { item_id: 2, item_text: Util.AREA_COMERCIAL},
      { item_id: 3, item_text: Util.AREA_FINANCEIRO},
      { item_id: 4, item_text: Util.AREA_OPERACIONAL},
      { item_id: 5, item_text: Util.AREA_RH},
      { item_id: 6, item_text: Util.AREA_TI}
    ];

    this.selectedAreas = [
      { item_id: 1, item_text: Util.AREA_ADMINISTRATIVO},
      { item_id: 2, item_text: Util.AREA_COMERCIAL},
      { item_id: 3, item_text: Util.AREA_FINANCEIRO},
      { item_id: 4, item_text: Util.AREA_OPERACIONAL},
      { item_id: 5, item_text: Util.AREA_RH},
      { item_id: 6, item_text: Util.AREA_TI}
    ];

    this.listStatus = [
      { item_id: 1, item_text: Util.STATUS_AGUARDANDOAPROVACAO },
      { item_id: 2, item_text: Util.STATUS_APROVADA },
      { item_id: 3, item_text: Util.STATUS_RASCUNHO },
      { item_id: 4, item_text: Util.STATUS_REPROVADA }
    ];

    this.selectedStatus = [
      { item_id: 1, item_text: Util.STATUS_AGUARDANDOAPROVACAO },
      { item_id: 2, item_text: Util.STATUS_APROVADA },
      { item_id: 3, item_text: Util.STATUS_RASCUNHO },
      { item_id: 4, item_text: Util.STATUS_REPROVADA }
    ];

    this.listAnos = [
      { item_id: 1, item_text: Util.ANO_2019 },
      { item_id: 2, item_text: Util.ANO_2020 },
      { item_id: 3, item_text: Util.ANO_2021 },
      { item_id: 4, item_text: Util.ANO_2022 },
      { item_id: 5, item_text: Util.ANO_2023 }
    ];

    const anoAtualstr = new Date().getFullYear().toString();
    const anoAtual = this.listAnos.find(a => a.item_text === anoAtualstr);
    this.selectedAno = [
      anoAtual
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 2,
      selectAllText: 'Selecionar Todos',
      unSelectAllText: 'Nenhum'
    };

    this.ddAnoSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text'
    };

    this.propostaService.getAll().then((itens) => {
      this.itensPropostaCache = itens;
      this.propostas = itens;
      this.filtrar();
    });

  }

  public filtrar(): void {
    const filtroArea = this.filtro.value.area;
    const filtroStatus = this.filtro.value.status;
    const filtroAno = this.filtro.value.ano[0];
    const arrayArea = [];
    const arrayStatus = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < filtroArea.length; i++) {
      arrayArea.push(filtroArea[i].item_text);
    }

    // tslint:disable-next-line: prefer-for-of
    for (let k = 0; k < filtroStatus.length; k++) {
      arrayStatus.push(filtroStatus[k].item_text);
    }

    if ((arrayStatus.length === 0) && (arrayArea.length === 0)) {
      this.selectAll();
    } else {
      this.itensPropostaCache = this.propostas.filter((item) => {
        return ((arrayArea.indexOf(item.area) !== -1) &&
          (arrayStatus.indexOf(item.status) !== -1) &&
          (item.dadosFinanceiros.find(d => d.ano.toString() === filtroAno.item_text) !== undefined));
      });
    }
  }

  public selectAll() {
    this.itensPropostaCache = this.propostas;
    return this.itensPropostaCache;
  }
}
