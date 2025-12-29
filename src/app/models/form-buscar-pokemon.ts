export class FormBuscarPokemon {
    // Nombre del pokemon buscado.
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }   

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}
