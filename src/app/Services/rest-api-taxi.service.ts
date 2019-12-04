import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable, from } from 'rxjs';
import { Taxi } from '../Classes/taxi';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};
@Injectable({
  providedIn: 'root'
})
export class RestApiTaxiService {
  //TODO
  private TaxisURl = 'http://symfonyrest.test/Taxis';


  constructor(private http: HttpClient) { }
  //get("/Taxis")
  getTaxis(): Observable<Taxi[]> {
    return this.http.get<Taxi[]>(this.TaxisURl, httpOptions);

  }
  //post("/Taxis")
  CreateTaxi(newTaxi: Taxi): Observable<Taxi[]> {
    console.log(newTaxi);

    return this.http.post<Taxi[]>(this.TaxisURl, JSON.stringify(newTaxi), httpOptions);
  }
  //get("/Taxis/:id")
  getTaxi(id: String): Observable<Taxi[]> {
    const url = `${this.TaxisURl}/${id}`;
    return this.http.get<Taxi[]>(url, httpOptions);
  }
  //put("/Taxis/:id")
  updateTaxi(updateTaxi: Taxi): Observable<Taxi[]> {
    const url = `${this.TaxisURl}/${updateTaxi.id}`;

    let updatedTaxi = {
      //TODO
    }
    return this.http.put<Taxi[]>(url, JSON.stringify(updatedTaxi));
  }
  //delete("/Taxis/:id")
  deleteTaxi(id: String): Observable<Taxi[]> {
    const url = `${this.TaxisURl}/${id}`;
    console.log(id);
    return this.http.delete<Taxi[]>(url, httpOptions);
  }
}
