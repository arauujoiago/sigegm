import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'modal-permuta-cmp',
  moduleId: module.id,
  templateUrl: 'modal-permuta.component.html',
  styleUrls: ['modal-permuta-style.scss']
})

export class ModalPermutaComponent implements OnInit {
  @Input() modalRef?: BsModalRef;
  public usuario?: string;
  public perfil?: string;

  ngOnInit() {
    this.usuario = localStorage.getItem("usuario").toUpperCase()
    this.perfil = localStorage.getItem("perfil")

  }

  fechar(): void {
    this.modalRef?.hide();
  }
}
