import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable, from } from 'rxjs';
import { Acommodation } from '../Classes/acommodation';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};
@Injectable({
  providedIn: 'root'
})
export class RestApiAcommodationService {


  //TODO
  private AcommodationsURl = 'http://symfonyrest.test/Acommodations';


  constructor(private http: HttpClient) { }
  //get("/Acommodations")
  getAcommodations(): Observable<Acommodation[]> {
    return this.http.get<Acommodation[]>(this.AcommodationsURl, httpOptions);

  }
  //post("/Acommodations")
  CreateAcommodation(newAcommodation: Acommodation): Observable<Acommodation[]> {
    console.log(newAcommodation);

    return this.http.post<Acommodation[]>(this.AcommodationsURl, JSON.stringify(newAcommodation), httpOptions);
  }
  //get("/Acommodations/:id")
  getAcommodation(id: String): Observable<Acommodation[]> {
    const url = `${this.AcommodationsURl}/${id}`;
    return this.http.get<Acommodation[]>(url, httpOptions);
  }
  //put("/Acommodations/:id")
  updateAcommodation(updateAcommodation: Acommodation): Observable<Acommodation[]> {
    const url = `${this.AcommodationsURl}/${updateAcommodation.id}`;

    let updatedAcommodation = {
      //TODO
    }
    return this.http.put<Acommodation[]>(url, JSON.stringify(updatedAcommodation));
  }
  //delete("/Acommodations/:id")
  deleteAcommodation(id: String): Observable<Acommodation[]> {
    const url = `${this.AcommodationsURl}/${id}`;
    console.log(id);
    return this.http.delete<Acommodation[]>(url, httpOptions);
  }
}
