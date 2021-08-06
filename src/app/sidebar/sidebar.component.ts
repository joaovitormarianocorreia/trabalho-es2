import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Painel',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Usuário',  icon:'pe-7s-user', class: '' },
    // { path: '/table', title: 'Tabelas',  icon:'pe-7s-note2', class: '' },
    // { path: '/maps', title: 'Mapas',  icon:'pe-7s-map-marker', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
