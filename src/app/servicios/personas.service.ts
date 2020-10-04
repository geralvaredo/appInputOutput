import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url = environment.urlPersonas;

  constructor(private http: HttpClient) { }

  public obtenerPersonas(): Observable<object> {
    return this.http.get(this.url);
  }
}
