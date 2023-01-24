import {Component, HostBinding} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'login-cmp',
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.scss']
})

export class LoginComponent {
  loginForm: FormGroup;
  carregando = false;
  credenciaisInvalidas = false;
  erro = false;
  mensagemErro?: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  async aoEnviar() {
    this.carregando = true;
    this.erro = false;
    this.credenciaisInvalidas = false;
    this.mensagemErro = undefined;

    const {usuario, senha} = this.loginForm.value

    // if (senha != "123456") {
    //   this.credenciaisInvalidas = true;
    //   return;
    // }

    localStorage.setItem("usuario", usuario)

    if(usuario.toLowerCase() == "admin")
      localStorage.setItem("perfil", "admin")
    else
      localStorage.setItem("perfil", "comum")

    await this.router.navigateByUrl("/dashboard");
  }
}
