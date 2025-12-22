import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemons } from './componentes/pokemons/pokemons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokemons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PokemonManager');
}
