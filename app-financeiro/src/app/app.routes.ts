import { Routes } from '@angular/router'
import { PropostaComponent } from './proposta/proposta.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { GraficoCrescimentoComponent } from './dashboard/grafico-crescimento/grafico-crescimento.component'
import { GraficoSetorComponent } from './dashboard/grafico-setor/grafico-setor.component'

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'proposta', component: PropostaComponent },
    { path: 'proposta/:id', component: PropostaComponent }
]