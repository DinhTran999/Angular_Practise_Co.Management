import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../model/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private departmentUrl = environment.BACKEND + '/api/departments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.httpClient
      .get<Department[]>(this.departmentUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Department[]>('getDepartments', [])));
  }

  getDepartment(departmentId: number): Observable<Department> {
    const url = `${this.departmentUrl}/${departmentId}`;
    return this.httpClient
      .get<Department>(url, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<Department>(`getDepartment id: ${departmentId}`)
        )
      );
  }

  addDepartment(department: Department): Observable<Department> {
    return this.httpClient
      .post<Department>(this.departmentUrl, department, this.httpOptions)
      .pipe(catchError(this.handleError<Department>('addDepartment')));
  }

  updateDepartment(department: Department): Observable<any> {
    const url = `${this.departmentUrl}/${department.id}`;
    return this.httpClient
      .put<Department>(url, department, this.httpOptions)
      .pipe(catchError(this.handleError<Department>('updateDepartment')));
  }

  deleteDepartment(departmentId: Number): Observable<any> {
    const url = `${this.departmentUrl}/${departmentId}`;
    return this.httpClient
      .delete(url, this.httpOptions)
      .pipe(catchError(this.handleError<Department>('deleteDepartment')));
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
