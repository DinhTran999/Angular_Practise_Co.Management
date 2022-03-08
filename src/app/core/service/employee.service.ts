import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // private backendUrl = environment.BACKEND;
  private backendUrl = environment.BACKEND;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getEmployeesByDepartmentId(departmentId: number): Observable<Employee[]> {
    return this.httpClient
      .get<Employee[]>(
        `${this.backendUrl}/api/departments/${departmentId}/employees`,
        this.httpOptions
      )
      .pipe(
        catchError(
          this.handleError<Employee[]>('getEmployeesByDepartmentId', [])
        )
      );
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient
      .get<Employee[]>(
        `${this.backendUrl}/api/statistic/employees`,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<Employee[]>('getEmployees', [])));
  }

  getEmployeeByDepartmentIdAndEmployeeId(
    departmentId: number,
    employeeId: number
  ): Observable<Employee> {
    return this.httpClient.get<Employee>(
      `${this.backendUrl}/api/departments/${departmentId}/employees/${employeeId}`
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
