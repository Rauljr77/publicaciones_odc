import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseToken } from '../interface/response';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private readonly apiBaseUrl : string = environment.apiUrl;
  private readonly apiUrl     : string = '/authToken';

  constructor(private readonly http: HttpClient) {}

  getToken(): Observable<IResponseToken> {
    const body = { key: environment.key, apiKey: environment.apiKey };
    return this.http.post<IResponseToken>(`${this.apiBaseUrl}${this.apiUrl}`, body);
  }
}
