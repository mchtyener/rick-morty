import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Result, RickyAndMorty} from "../model/rick-and-morty.model";
import {ROUTES} from "../route/routes";

@Injectable({
  providedIn: 'root'
})
export class RickyMortyService {


  constructor(private http: HttpClient) {
  }


  getAllRickyAndMortyList(data?: any): Observable<Result> {
    return this.http.get<Result>(`${environment.apiUrl}${ROUTES.RickyAndMorty.ALL}`, {params: data})
  }

  getDetailRickyAndMorty(id: string): Observable<RickyAndMorty> {
    return this.http.get<RickyAndMorty>(`${environment.apiUrl}${ROUTES.RickyAndMorty.ALL}/${id}`)
  }


}
