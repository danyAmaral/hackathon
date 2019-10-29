import { Routes } from '@angular/router';
import { PropostaComponent } from './proposta/proposta.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficoCrescimentoComponent } from './dashboard/grafico-crescimento/grafico-crescimento.component';
import { GraficoSetorComponent } from './dashboard/grafico-setor/grafico-setor.component';
import { ListagemComponent } from './dashboard/listagem/listagem.component';

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent,
        children: [
            { path: 'grafico-crescimento', component: GraficoCrescimentoComponent },
            { path: 'grafico-setor', component: GraficoSetorComponent }
        ]
    },
    { path: 'proposta', component: PropostaComponent },
    { path: 'proposta/:id', component: PropostaComponent },
    { path: 'listagem', component: ListagemComponent}
];
