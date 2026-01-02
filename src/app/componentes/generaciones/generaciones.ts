import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon as PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-generaciones',
  imports: [CommonModule],
  templateUrl: './generaciones.html',
  styleUrl: './generaciones.css',
})

export class Generaciones implements OnInit {
  generaciones = [];
  numeroDeGeneraciones: number;

  constructor(private servicePokemons: PokemonService) {}

  ngOnInit() {
    this.servicePokemons.getGeneraciones().subscribe(resultado => {
      this.generaciones = resultado.results;
      this.numeroDeGeneraciones = resultado.count;
    });
  }
}
