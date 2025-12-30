import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon/pokemon';
import { Pokemon as PokemonService } from '../../services/pokemon';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';
import { FormBuscarPokemon } from '../../models/form-buscar-pokemon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pokemons',
  imports: [CommonModule, Pokemon, FontAwesomeModule, FormsModule],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons implements OnInit {
  
  pokemonSeleccionado: any;

  pokemons = [];
  cuenta = 0;
  faOptinMonster = faOptinMonster;
  formBuscarPokemon: FormBuscarPokemon = new FormBuscarPokemon('');
  easterEggs = false;

  constructor(private servicePokemons: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.cuenta = this.servicePokemons.contandoPokemons();
  }

  buscar(nombreDelPokemon: string){
    this.pokemons = this.servicePokemons.buscarPokemon(nombreDelPokemon);
    this.easterEggs = false;
    if(nombreDelPokemon == 'C3PO'){
      this.easterEggs = true;
    }
  }

  cancelarBuscar(){
    this.pokemons = this.servicePokemons.getPokemons();
    this.formBuscarPokemon.setNombre('');
  }
} 
