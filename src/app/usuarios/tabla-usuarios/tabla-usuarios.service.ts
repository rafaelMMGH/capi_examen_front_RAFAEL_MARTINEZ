import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablaUsuariosService {
  constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/users');
  }
}