import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exercicio1RoutingModule } from './exercicio1-routing.module';
import { Exercicio1ListaComponent } from './exercicio1-lista/exercicio1-lista.component';
import { Exercicio2ListaComponent } from './exercicio2-lista/exercicio2-lista.component';


@NgModule({
  declarations: [
    Exercicio1ListaComponent,
    Exercicio2ListaComponent
  ],
  imports: [
    CommonModule,
    Exercicio1RoutingModule,
    ReactiveFormsModule
  ]
})
export class Exercicio1Module { }
