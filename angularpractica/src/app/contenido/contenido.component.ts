import { Component, OnInit,Output, EventEmitter, ViewChild, AfterViewInit  } from '@angular/core';
import {Personas} from './../usuarios/usuarios.module';
import {UsuariosService} from './../usuarios.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {ModalComponent} from './../modal/modal.component'


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit , AfterViewInit{

  users: any;
  listado = [];
  @Output()
  propagar = new EventEmitter<[]>();
  @ViewChild(ModalComponent) child : any;

  constructor(private usuariosService: UsuariosService) {
    
   }

  ngOnInit(): void {
    this.usuariosService.getPersonas().subscribe(data => {
      this.users = data.results;
    });
    var array = localStorage.getItem('myArray');
    var numero=array?.length;
    console.log(numero);
  }

  procesaPropagar($event : any){
    console.log(this.propagar);
   } 

   ngAfterViewInit() {
    this.listado = this.child
  }
}
