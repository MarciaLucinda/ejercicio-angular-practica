import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {
public addpersona : FormGroup;
listadopersonas = [];
public nomb : any;
@Output()
propagar = new EventEmitter<[]>();
constructor() {

    this.addpersona = this.createdForm();
    this.propagar = new EventEmitter<[]>();
}

get no(){ return this.addpersona.get('no'); }
get ed(){ return this.addpersona.get('ed'); }
get se(){ return this.addpersona.get('se'); }



 
createdForm(){
 return new FormGroup({
  no: new FormControl('', [Validators.required]),
  ed: new FormControl(1, [Validators.required]),
  se : new FormControl([Validators.required])
 })

}

onResetForm(): void {
  this.addpersona.reset();
}


miSubmit() {
  console.log(this.addpersona.value);
  //console.log(this.addpersona);
  this.listadopersonas=this.addpersona.value;
  this.propagar.emit(this.addpersona.value);
  localStorage.setItem('myArray', JSON.stringify(this.listadopersonas));
  this.addpersona.reset();
  
}


}
