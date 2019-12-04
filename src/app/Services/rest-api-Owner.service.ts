import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable, from } from 'rxjs';
import { Owner } from '../Classes/owner';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  //TODO
  private OwnersURl = 'http://travallo.test/Owners';


  constructor(private http: HttpClient) { }
  //get("/Owners")
  getOwners(): Observable<Owner[]> {
    
    return this.http.get<Owner[]>(this.OwnersURl, httpOptions);
    
  }
  //post("/Owners")
  CreateOwner(newOwner: Owner): Observable<Owner[]> {
    console.log(newOwner);

    return this.http.post<Owner[]>(this.OwnersURl, JSON.stringify(newOwner), httpOptions);
  }
  //get("/Owners/:id")
  getOwner(id: String): Observable<Owner[]> {
    const url = `${this.OwnersURl}/${id}`;
    return this.http.get<Owner[]>(url, httpOptions);
  }
  //put("/Owners/:id")
  updateOwner(updateOwner: Owner): Observable<Owner[]> {
    const url = `${this.OwnersURl}/${updateOwner.id}`;

    let updatedOwner = {
      //TODO
    }
    return this.http.put<Owner[]>(url, JSON.stringify(updatedOwner));
  }
  //delete("/Owners/:id")
  deleteOwner(id: String): Observable<Owner[]> {
    const url = `${this.OwnersURl}/${id}`;
    console.log(id);
    return this.http.delete<Owner[]>(url, httpOptions);
  }
}
