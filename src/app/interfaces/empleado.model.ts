export interface RespuestaEmpleados {
    ListaUsuariosByIdPerfil: Empleado[];
  }
  
  export interface Empleado {
    idUsuario?: number;
    cedulaUsuario?: string;
    nombresUsuario?: string;
    apellidosUsuario?: string;
    direccionUsuario?: string;
    telefonoUsuario?: string;
    correoUsuario?: string;
    numFamiliares?: number;
    fechaNacimiento?: string;
    ubicacionGeografica?: UbicacionGeografica;
    idCantonPertenece?: number;
    user?: string;
    password? : string;
    confirm? :string;
    fechaRegistro?: string;
    pivot?: Pivot;
  }
  
  interface Pivot {
    idPerfilPertenece: number;
    idUsuarioPertenece: number;
  }
  
  interface UbicacionGeografica {
    type: string;
    coordinates: number[];
  }

  export class DataTablesResponse {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
  }

  export interface respuestalistaCantones {
    ListaCantonesByIdProvincia: Canton[];
  }
  
  export interface Canton {
    idCanton: number;
    nombreCanton: string;
    idProvinciaPertenece: number;
  }