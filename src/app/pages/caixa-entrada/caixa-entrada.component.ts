import {Component} from '@angular/core';
import Swal from "sweetalert2";
import {montarSwalAprovacao, montarSwalReprovacao} from "../../shared";

@Component({
  selector: 'estoque-cmp',
  moduleId: module.id,
  templateUrl: 'caixa-entrada.component.html'
})

export class CaixaEntradaComponent {

  async aceitarPermuta() {
    await Swal.fire(montarSwalAprovacao(
      `Confirmar ação`,
      `Tem certeza que você deseja aprovar a solicitação de permuta?`
    ));
  }

  async recusarPermuta() {
    await Swal.fire(montarSwalReprovacao(
      `Confirmar ação`,
      `Tem certeza que você deseja reprovar a solicitação de permuta?`
    ));
  }
}
