import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons {
  unaCadenaDeCaracteres = "Una variable a mostrar";
  unNumero = 42;
  unObjeto = { apellido: "Wayne", nombre: "Bruce", ciudad: "Gotham"};

  constructor() {}

  onInit() {
    console.log('Componente Pokemons cargado');
  }
} 
