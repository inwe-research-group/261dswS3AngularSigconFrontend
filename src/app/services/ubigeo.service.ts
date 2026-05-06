import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubigeo } from '../model/ubigeo';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UbigeoService {
  constructor(private http: HttpClient) {}

  getUbigeo(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${environment.url}/ubigeo`);
  }
}
