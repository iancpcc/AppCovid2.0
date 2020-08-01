export interface RespuestaCiudadanos {
    ListaUsuariosByIdPerfil: Ciudadanos[];
  }
  
  export interface Ciudadanos {
    idUsuario: number;
    cedulaUsuario: string;
    nombresUsuario: string;
    apellidosUsuario: string;
    direccionUsuario: string;
    telefonoUsuario: string;
    correoUsuario: string;
    numFamiliares: number;
    fechaNacimiento: string;
    ubicacionGeografica?: UbicacionGeografica;
    idCantonPertenece: number;
    fechaRegistro: string;
    pivot: Pivot;
  }
  
  interface Pivot {
    idPerfilPertenece: number;
    idUsuarioPertenece: number;
  }
  
  interface UbicacionGeografica {
    type: string;
    coordinates?: number[];
  }