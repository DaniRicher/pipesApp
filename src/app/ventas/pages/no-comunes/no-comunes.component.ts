import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


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

  //KeyValue pipe
  persona={
    nombre: 'Daniel',
    edad: 21,
    direccion: 'Santa Marta-Col' 
  }
  //Json pipe
  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]
  //Async Pipe

  miObservable=interval(2000);//0,1,2,3,4,5,6,...

  valorPromesa=new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("Tenemos data de promesa")
    }, 3500);
  });

}