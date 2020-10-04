import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  public url = environment.urlPersonas;

  constructor(private http: HttpClient) { }

  public obtenerPersonas(): Observable<object> {
    return this.http.get(this.url);
  }
}
