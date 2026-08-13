import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio';
import { Noticias } from './noticias/noticias';
import { Categorias } from './categorias/categorias';
import { Contato } from './contato/contato';

export const routes: Routes = [
  {
    path: 'inicio',
    component: Inicio
  },
  {
    path: 'noticias',
    component: Noticias
  },
  {
    path: 'categorias',
    component: Categorias
  },
  {
    path: 'contato',
    component: Contato
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];