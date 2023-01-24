import {SweetAlertOptions} from "sweetalert2";

export function montarSwalAprovacao(titulo: string, texto: string): SweetAlertOptions {
  return {
    buttonsStyling: false,
    customClass: {
      popup: 'swal-min-width',
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-light',
      denyButton: 'btn btn-light',
      input: 'form-control'
    },
    title: titulo,
    text: texto,
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar',
    icon: 'warning',
    returnFocus: false,
    focusConfirm: false,
    focusCancel: false,
    focusDeny: false,
    width: 'auto',
  }
}

export function montarSwalReprovacao(titulo: string, texto: string): SweetAlertOptions {
  return {
    buttonsStyling: false,
    customClass: {
      popup: 'swal-min-width',
      confirmButton: 'btn btn-danger',
      cancelButton: 'btn btn-light',
      denyButton: 'btn btn-light',
      input: 'form-control'
    },
    title: titulo,
    text: texto,
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar',
    icon: 'warning',
    returnFocus: false,
    focusConfirm: false,
    focusCancel: false,
    focusDeny: false,
    width: 'auto',
  }
}
