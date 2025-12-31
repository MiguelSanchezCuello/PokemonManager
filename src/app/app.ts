import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarraDeNavegacion } from './componentes/barra-de-navegacion/barra-de-navegacion';
import { Pokemons } from './componentes/pokemons/pokemons';
import { Generaciones } from './componentes/generaciones/generaciones';

@Component({
  selector: 'app-root',
  imports: [BarraDeNavegacion, Pokemons, Generaciones, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PokemonManager');
}
