import {Component} from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'estoque-cmp',
  moduleId: module.id,
  templateUrl: 'estoque.component.html'
})

export class EstoqueComponent {
}
