import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UsuariosService} from './usuarios.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NavbarComponent } from './navbar/navbar.component';
import { from } from 'rxjs';
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    NavbarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



