import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio1ListaComponent } from './exercicio1-lista/exercicio1-lista.component';
import { Exercicio2ListaComponent } from './exercicio2-lista/exercicio2-lista.component';

const routes: Routes = [
  {path:'',
  component: Exercicio1ListaComponent
  },
  {
    path: 'exercicio2',
    component: Exercicio2ListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercicio1RoutingModule { }
