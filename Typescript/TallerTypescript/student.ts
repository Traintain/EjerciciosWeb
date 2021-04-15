
export class Student {
    codigo: number;
    telefono: number;
    cedula: number;
    edad: number;
    direccion: string;
    nombre: string;
  
    constructor(codigo: number, telefono:number, cedula:number,
        edad:number, direccion:string, nombre:string) {
      this.codigo=codigo;
      this.telefono=telefono;
      this.cedula=cedula;
      this.edad=edad;
      this.direccion=direccion;
      this.nombre=nombre;
    }
  }