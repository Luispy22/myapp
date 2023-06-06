import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  title = 'Listado de personas'
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = '';

  agregarPersona(){
  this.mensaje = 'Persona agregada';
 }
}
