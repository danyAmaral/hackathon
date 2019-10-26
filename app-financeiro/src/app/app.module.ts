import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent} from './dashboard/cards/cards.component';
import { GraficoCrescimentoComponent } from './dashboard/grafico-crescimento/grafico-crescimento.component';
import { GraficoSetorComponent } from './dashboard/grafico-setor/grafico-setor.component';
import { ListagemComponent } from './dashboard/listagem/listagem.component';
import { PropostaComponent } from './proposta/proposta.component'


import {RouterModule} from '@angular/router'
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    GraficoCrescimentoComponent,
    GraficoSetorComponent,
    ListagemComponent,
    PropostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
