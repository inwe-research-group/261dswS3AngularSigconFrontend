import { Modulo } from "./modulo";
import { Rol } from "./rol";

export interface UserSesion {
  email: string;
  personaId: string;
  names: string;
  rol: Rol;
  modulos: Modulo[];
}
