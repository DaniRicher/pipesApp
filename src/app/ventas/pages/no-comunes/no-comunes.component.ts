import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre:string="Daniel";
  genero:string="masculino";
  invitacion={
    'masculino':"invitarlo",
    'femenino':"invitarla"
  }

  //i18nPlural
  clientes:string[]=['Maria','Fernando','Hernando','Eduardo']
  clientesMapa={
    '=0':'No tenemos ningun cliente esperando',
    '=1':'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre="Fernando"
    this.genero="masculino"
  }
  borrarCliente(){
    this.clientes.pop();
  }

}
