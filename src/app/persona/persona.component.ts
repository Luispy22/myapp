import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

 nombre: string = 'Luis'
 apellido: string = 'Bautista'
 edad: number = 40
 
}
