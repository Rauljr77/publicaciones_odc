import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { IResult, IPublication } from '../interface/response';
import { getBasicHttpOptions } from '../utils/service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private readonly apiBaseUrl : string = environment.apiUrl;
  private readonly apiUrl     : string = '/Publicaciones';

  constructor(private readonly http: HttpClient) {}

  getAllPublication(token: string): Observable<IResult<IPublication[]>> {
    return this.http.get<IResult<IPublication[]>>(`${this.apiBaseUrl}${this.apiUrl}/GetAllPublicaciones`, { headers: getBasicHttpOptions(token) });
  }
}
