import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';


@Injectable({
  providedIn: 'root'
})
export class UserServ {
  //private http = inject(HttpClient);
  private baseURL = "http://localhost:8080/api/v1/users";

  
  constructor(private httpClient : HttpClient) {
    httpClient = inject(HttpClient);

  }
  
  
  /*getUserList(): Observable<User[]>{
    this.HttpClient.get("http://localhost:8080/api/v1/users").subscribe({
      next:data=>{
        this.usuarios = data;
        return this.usuarios;
      }
    })
  }*/

    
  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`)
  
  }
}
