import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {
  @Input() pokemon: any = {};

  @Output() eventoClickImagen = new EventEmitter<any>();

  constructor() {};

  ngOnInit(): void {
    
  }

  clickEnImagen(pokemon: any) {
    this.eventoClickImagen.emit(pokemon);
  }
}
