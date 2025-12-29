import { Component, signal } from '@angular/core';
import { Pokemons } from './componentes/pokemons/pokemons';
import { Generaciones } from './componentes/generaciones/generaciones';

@Component({
  selector: 'app-root',
  imports: [Pokemons, Generaciones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PokemonManager');
}
