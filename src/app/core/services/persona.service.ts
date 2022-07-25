import { GeneralConstants } from './../constants/general.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'https://balestra-matias.herokuapp.com/persona/details';

  constructor(private http: HttpClient) { }


  public get (url:string){
    return this.http.get(url);
  }

}
