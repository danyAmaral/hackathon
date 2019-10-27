import { Routes } from '@angular/router'
import { PropostaComponent } from './proposta/proposta.component'
import { DashboardComponent } from './dashboard/dashboard.component'

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'proposta', component: PropostaComponent },
    {
        path: 'proposta/:id', component: PropostaComponent,
    },
]