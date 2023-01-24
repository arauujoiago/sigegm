import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "../../pages/login/login.component";
import {EstoqueComponent} from "../../pages/estoque/estoque.component";
import {MovimentacoesComponent} from "../../pages/movimentacoes/movimentacoes.component";
import {EscalaComponent} from "../../pages/escala/escala.component";
import {CaixaEntradaComponent} from "../../pages/caixa-entrada/caixa-entrada.component";
import {ModalPermutaComponent} from "../../pages/escala/modal-permuta/modal-permuta.component";
import {AppModule} from "../../app.module";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ModalModule} from "ngx-bootstrap/modal";
import * as sweetalert2 from "sweetalert2";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    DashboardComponent,
    EstoqueComponent,
    EscalaComponent,
    CaixaEntradaComponent,
    MovimentacoesComponent,
    ModalPermutaComponent,
    LoginComponent
  ]
})

export class AdminLayoutModule {
}
