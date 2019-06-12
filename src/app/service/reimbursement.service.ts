import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { environment } from '../../environments/environment';
import { HttpClient,HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export type HandleError = <T>(
  operation?: string,
  result?: T
) => (error: HttpErrorResponse) => Observable<T>;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable({
  providedIn: "root"
})
export class ReimbursementService {
  private _getEmpDataUrl = environment.APIEndpoint + "/v1/employee/";

  constructor(private http: HttpClient) {}

  getEmployeeData(id) {
    let url = this._getEmpDataUrl + id
    return this.http.get(url).pipe(tap(data => {}));
  }
}
