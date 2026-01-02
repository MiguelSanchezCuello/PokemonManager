import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAPI } from '../../models/pokemon-api';
import { Pokemon as PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {
  @Input() pokemonInput: any = {};

  @Output() eventoClickImagen = new EventEmitter<any>();

  pokemon: PokemonAPI;

  constructor(private servicePokemons: PokemonService) {};

  ngOnInit(): void {
    this.servicePokemons.getPokemon(this.pokemonInput['url'])
    .subscribe(resultado => {
      this.pokemon = resultado;
    });
  }

  clickEnImagen(pokemon: any) {
    this.eventoClickImagen.emit(pokemon);
  }
}
