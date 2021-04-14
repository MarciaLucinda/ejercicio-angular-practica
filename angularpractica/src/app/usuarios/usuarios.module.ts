import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
export interface Personas {
  
  nombre: string;
  edad : number;
  sexo : string;

}