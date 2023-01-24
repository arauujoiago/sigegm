import {Component} from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'movimentacoes-cmp',
  moduleId: module.id,
  templateUrl: 'movimentacoes.component.html'
})

export class MovimentacoesComponent {
}
