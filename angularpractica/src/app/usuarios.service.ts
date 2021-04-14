import { Injectable } from '@angular/core';
import {Personas} from './usuarios/usuarios.module';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  baseUrl = environment.baseUrl;
  key = environment.baseKey;
  constructor(private http: HttpClient) {


   }


  getPersonas(): Observable<any>{
    return this.http.get<Personas>(this.baseUrl + '196bdc12c6303f7d9d14845d430390ae?key=' + this.key)
  }


}
