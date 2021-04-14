import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContenidoComponent} from './contenido/contenido.component'

const routes: Routes = [
  { path: '', component: ContenidoComponent },
  { path: 'contenido', component: ContenidoComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
