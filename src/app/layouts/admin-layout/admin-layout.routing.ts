import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {EstoqueComponent} from "../../pages/estoque/estoque.component";
import {MovimentacoesComponent} from "../../pages/movimentacoes/movimentacoes.component";
import {EscalaComponent} from "../../pages/escala/escala.component";
import {CaixaEntradaComponent} from "../../pages/caixa-entrada/caixa-entrada.component";

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'caixa-entrada', component: CaixaEntradaComponent},
  {path: 'escala', component: EscalaComponent},
  {path: 'estoque', component: EstoqueComponent},
  {path: 'movimentacoes', component: MovimentacoesComponent}
];
