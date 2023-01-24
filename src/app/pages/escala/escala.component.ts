import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'escala-cmp',
  moduleId: module.id,
  templateUrl: 'escala.component.html'
})

export class EscalaComponent implements OnInit {
  modalRef?: BsModalRef;
  @ViewChild('modalPermuta') modalTemplate?: TemplateRef<any>;
  public perfil?: string;

  constructor(
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.perfil = localStorage.getItem("perfil")
  }

  abrirModalPermuta(): void {
    this.modalRef = this.modalService.show(this.modalTemplate, {
      class: 'modal-lg',
      ignoreBackdropClick: true,
    })
  }

}
