import { Routes } from '@angular/router';
import { Generaciones } from './componentes/generaciones/generaciones';
import { Pokemons } from './componentes/pokemons/pokemons';
import { Creacion } from './componentes/creacion/creacion';
import { Conexion } from './componentes/conexion/conexion';

export const routes: Routes = [
    {path: 'generaciones', component: Generaciones},
    {path: 'pokemons', component: Pokemons},
    {path: 'crearCuenta', component: Creacion},
    {path: 'conectarse', component: Conexion},
];
