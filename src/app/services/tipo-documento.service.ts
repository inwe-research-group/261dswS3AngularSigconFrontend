import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { TipoDocumento } from '../model/tipo-documento';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoService {
  private http=inject( HttpClient)

  getTipoDocumento(): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(`${environment.url}/tipodocumento`);
  }

}
