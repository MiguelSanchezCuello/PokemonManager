import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generaciones',
  imports: [CommonModule],
  templateUrl: './generaciones.html',
  styleUrl: './generaciones.css',
})

export class Generaciones implements OnInit {
  generaciones = [
    "Generacion I",
    "Generacion II",
    "Generacion III",
    "Generacion IV",
    "Generacion V",
    "Generacion VI",
    "Generacion VII",
  ]

  constructor() {}

  ngOnInit() {
    console.log('Componente Generaciones cargado');
  }
}
