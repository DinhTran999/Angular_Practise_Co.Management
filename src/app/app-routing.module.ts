import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentEmployeesComponent } from './feature/department/department-employees/department-employees.component';
import { DepartmentComponent } from './feature/department/department.component';
import { EmployeeDetailComponent } from './feature/employee/employee-detail/employee-detail.component';
import { EmployeeComponent } from './feature/employee/employee.component';

const routes: Routes = [
  // {path:'heroes',component:HeroesComponent},
  { path: 'departments', component: DepartmentComponent },
  { path: 'departments/:deptId/employees', component: DepartmentEmployeesComponent },
  { path: 'employees', component: EmployeeComponent },
  {
    path: 'employee-details',
    component: EmployeeDetailComponent,
  },
  // { path: '', redirectTo: '/departments', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
