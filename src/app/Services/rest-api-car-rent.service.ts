import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable, from } from 'rxjs';
import { CarRent } from '../Classes/car-rent';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};
@Injectable({
  providedIn: 'root'
})
export class RestApiCarRentService {

  //TODO
  private CarRentsURl = 'http://symfonyrest.test/CarRents';


  constructor(private http: HttpClient) { }
  //get("/CarRents")
  getCarRents(): Observable<CarRent[]> {
    return this.http.get<CarRent[]>(this.CarRentsURl, httpOptions);

  }
  //post("/CarRents")
  CreateCarRent(newCarRent: CarRent): Observable<CarRent[]> {
    console.log(newCarRent);

    return this.http.post<CarRent[]>(this.CarRentsURl, JSON.stringify(newCarRent), httpOptions);
  }
  //get("/CarRents/:id")
  getCarRent(id: String): Observable<CarRent[]> {
    const url = `${this.CarRentsURl}/${id}`;
    return this.http.get<CarRent[]>(url, httpOptions);
  }
  //put("/CarRents/:id")
  updateCarRent(updateCarRent: CarRent): Observable<CarRent[]> {
    const url = `${this.CarRentsURl}/${updateCarRent.id}`;

    let updatedCarRent = {
      //TODO
    }
    return this.http.put<CarRent[]>(url, JSON.stringify(updatedCarRent));
  }
  //delete("/CarRents/:id")
  deleteCarRent(id: String): Observable<CarRent[]> {
    const url = `${this.CarRentsURl}/${id}`;
    console.log(id);
    return this.http.delete<CarRent[]>(url, httpOptions);
  }
}
