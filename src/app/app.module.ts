import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './feature/department/department.component';
import { EmployeeComponent } from './feature/employee/employee.component';
import { EmployeeDetailComponent } from './feature/employee/employee-detail/employee-detail.component';
import { GoBackComponent } from './shared/goBack/goBack.component';
import { DepartmentEmployeesComponent } from './feature/department/department-employees/department-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    GoBackComponent,
    DepartmentEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
