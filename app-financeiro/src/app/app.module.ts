import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { GraficoCrescimentoComponent } from './dashboard/grafico-crescimento/grafico-crescimento.component';
import { GraficoSetorComponent } from './dashboard/grafico-setor/grafico-setor.component';
import { GraficoLinhasComponent } from './dashboard/grafico-linhas/grafico-linhas.component';
import { ListagemComponent } from './dashboard/listagem/listagem.component';
import { PropostaComponent } from './proposta/proposta.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { TopoComponent } from './topo/topo.component';
import { HttpClientModule } from '@angular/common/http';
import { PropostaService } from './proposta.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import {
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxCalendarModule,
  DxTemplateModule,
  DxChartModule,
  DxButtonModule,
  DxDataGridModule,
  DxPieChartModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    GraficoCrescimentoComponent,
    GraficoSetorComponent,
    ListagemComponent,
    PropostaComponent,
    TopoComponent,
    GraficoLinhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxDateBoxModule,
    DxCalendarModule,
    DxTemplateModule,
    DxChartModule,
    DxButtonModule,
    DxDataGridModule,
    DxPieChartModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCurrencyModule,
    RouterModule.forRoot(ROUTES),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    PropostaService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
