import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { PersonaResponse } from '../model/api/response/persona-response';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { PersonaRequest } from '../model/api/request/persona-request';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private http=inject( HttpClient);

  getPersonas(): Observable<PersonaResponse[]> {
    return this.http.get<PersonaResponse[]>(`${environment.url}/persona`);
  }

  registrarPersona(persona: PersonaRequest): Observable<PersonaResponse> {
    console.log(persona);
    return this.http.post<PersonaResponse>(`${environment.url}/persona`, persona);
  }

  eliminarPersona(persona: PersonaRequest): Observable<PersonaResponse> {
    return this.http.delete<PersonaResponse>(`${environment.url}/persona`, {
      body: persona,
    });
  }

  actualizarPersona(persona: PersonaRequest): Observable<PersonaResponse> {
    return this.http.put<PersonaResponse>(`${environment.url}/persona`, persona);
  }
}
