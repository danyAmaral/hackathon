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
  public anoAtualstr = new Date().getFullYear().toString();
  public anoSeleciono: string = this.anoAtualstr;
  public propostas: Array<PropostaDashboard>;
  public itensPropostaCache: Array<PropostaDashboard>;
  public filtro: FormGroup = new FormGroup({
    ano: new FormControl(),
    area: new FormControl(),
    status: new FormControl()
  });
  public filtroSub: any;

  constructor(private propostaService: PropostaService) { }

  ngOnInit() {
    this.listAreas = [
      { item_id: 1, item_text: Util.AREA_ADMINISTRATIVO },
      { item_id: 2, item_text: Util.AREA_COMERCIAL },
      { item_id: 3, item_text: Util.AREA_FINANCEIRO },
      { item_id: 4, item_text: Util.AREA_OPERACIONAL },
      { item_id: 5, item_text: Util.AREA_RH },
      { item_id: 6, item_text: Util.AREA_TI }
    ];

    this.listStatus = [
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
      this.filtroSub = this.filtro.valueChanges.subscribe(next => this.filtrar());
      this.filtrar();
    });
  }


  public exitemPropostas(): boolean {
    let existe = false;
    existe = (this.itensPropostaCache && this.itensPropostaCache.length > 0) ? true : false;
    return existe;
  }

  public exitemPropostasAprovadas(): boolean {
    let existe = false;
    if (this.exitemPropostas()) {
      let itensAprovados = this.itensPropostaCache.filter(x => { return x.status === Util.STATUS_APROVADA });
      existe = (itensAprovados && itensAprovados.length > 0) ? true : false;
    }
    return existe;
  }

  public filtrar(): void {
    const filtroArea = this.filtro.value.area;
    const filtroStatus = this.filtro.value.status;
    let filtroAno = this.filtro.value.ano;
    const arrayArea = [];
    const arrayStatus = [];

    if (!filtroAno)
      filtroAno = this.anoAtualstr;
    else
      filtroAno = filtroAno[0].item_text;

    if (filtroArea) {
      for (let i = 0; i < filtroArea.length; i++) {
        arrayArea.push(filtroArea[i].item_text);
      }
    }

    if (filtroStatus) {
      for (let k = 0; k < filtroStatus.length; k++) {
        arrayStatus.push(filtroStatus[k].item_text);
      }
    }
    this.anoSeleciono = filtroAno;
    const nenhumStatusSelecionado = arrayStatus.length === 0;
    const nenhumaAreaSelecionada = arrayArea.length === 0;
    this.itensPropostaCache = this.propostas.filter((item) => {
      return ((arrayArea.indexOf(item.area) !== -1 || nenhumaAreaSelecionada) &&
        (arrayStatus.indexOf(item.status) !== -1 || nenhumStatusSelecionado) &&
        (item.dadosFinanceiros.find(d => d.ano.toString() === filtroAno) !== undefined));
    });
  }

  ngOnDestroy() {
    if (this.filtroSub) {
      this.filtroSub.unsubscribe();
    }
  }
}
