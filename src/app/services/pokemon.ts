import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneracionesAPI } from '../models/generaciones-api';
import { PokemonsAPI } from '../models/pokemons-api';
import { PokemonAPI } from '../models/pokemon-api';

@Injectable({
  providedIn: 'root',
})
export class Pokemon {
  // pokemons = [
  //   { 'id': 1, 'nombre': 'Bulbasaur', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 'categoria': 'semilla', 'tipo': ['planta', 'veneno'], 'talla': 0.70, 'peso': 6.9 },
  //   { 'id': 2, 'nombre': 'Ivysaur', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 'categoria': 'semilla', 'tipo': ['planta', 'veneno'], 'talla': 1.00, 'peso': 13.0 },
  //   { 'id': 3, 'nombre': 'Venusaur', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', 'categoria': 'semilla', 'tipo': ['planta', 'veneno'], 'talla': 2.00, 'peso': 100.0 },
  //   { 'id': 4, 'nombre': 'Charmander', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 'categoria': 'lagarto', 'tipo': ['fuego'], 'talla': 0.60, 'peso': 8.5 },
  //   { 'id': 5, 'nombre': 'Charmeleon', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', 'categoria': 'llama', 'tipo': ['fuego'], 'talla': 1.10, 'peso': 19.0 },
  //   { 'id': 6, 'nombre': 'Charizard', 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 'categoria': 'llama', 'tipo': ['fuego', 'volador'], 'talla': 1.70, 'peso': 90.5 },
  // ];

  constructor(private http: HttpClient) {}

  getGeneraciones() {
    let url = 'https://pokeapi.co/api/v2/generation/';
    return this.http.get<GeneracionesAPI>(url);
  }

  getPokemons() {
    // return this.pokemons;
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get<PokemonsAPI>(url);
  }

  getPokemon(url) {
    return this.http.get<PokemonAPI>(url);
  }

  // contandoPokemons() {
  //   return this.pokemons.length;
  // }

  // buscarPokemon(nombreDelPokemon: string) {
  //   let regex = new RegExp(nombreDelPokemon, 'gi');
  //   return this.pokemons.filter(pokemon => pokemon.nombre.match(regex));
  // }
}
