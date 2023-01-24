import {Component, OnInit} from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: ''},
  {path: '/caixa-entrada', title: 'Caixa de Entrada', icon: 'nc-box', class: ''},
  {path: '/escala', title: 'Escala', icon: 'nc-calendar-60', class: ''},
  {path: '/estoque', title: 'Estoque', icon: 'nc-box-2', class: ''},
  {path: '/movimentacoes', title: 'Movimentações', icon: 'nc-delivery-fast', class: ''},
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];

  ngOnInit() {
    const perfil = localStorage.getItem("perfil")
    if (perfil == "comum")
      this.menuItems = ROUTES.filter(menuItem => menuItem.title != "Caixa de Entrada")
    else
      this.menuItems = ROUTES.filter(menuItem => menuItem);

  }
}
