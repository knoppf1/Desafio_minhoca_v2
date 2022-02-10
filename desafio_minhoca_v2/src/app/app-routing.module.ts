import { Exercicio1Module } from './exercicio1/exercicio1.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'exercicio1'
  },
  {
    path:'exercicio1',
    loadChildren: () => import('./exercicio1/exercicio1.module').then(x=>x.Exercicio1Module)
  },


  // {
  //   path: 'empresa',
  //   loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule)
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
