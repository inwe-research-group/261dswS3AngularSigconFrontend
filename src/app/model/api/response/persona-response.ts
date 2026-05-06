import { TipoDocumento } from "../../tipo-documento";
import { Ubigeo } from "../../ubigeo";

export interface PersonaResponse {
  idPersona: number;
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombres: string;
  fechaNacimiento: Date;
  ndocumento: string;
  direccion: string;
  tipoDocumento: TipoDocumento;
  ubigeo: Ubigeo;
}
