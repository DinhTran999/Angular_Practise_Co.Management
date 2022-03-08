import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/core/model/department.model';
import { Employee } from 'src/app/core/model/employee.model';
import { DepartmentService } from 'src/app/core/service/department.service';
import { EmployeeService } from 'src/app/core/service/employee.service';

@Component({
  selector: 'app-department-employees',
  templateUrl: './department-employees.component.html',
  styleUrls: ['./department-employees.component.css'],
})
export class DepartmentEmployeesComponent implements OnInit {
  department!: Department;
  employees?: Employee[];
  isShowEmployeeList: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private departmentSerivce: DepartmentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDepartment();
  }

  getDepartment(): void {
    const departmentId = Number(this.route.snapshot.paramMap.get('deptId'));
    this.departmentSerivce
      .getDepartment(departmentId)
      .subscribe((department) => (this.department = department));
  }

  getEmployeesByDepartmentId(): void {
    if (!this.employees) {
      this.employeeService
        .getEmployeesByDepartmentId(this.department.id)
        .subscribe((employees) => (this.employees = employees));
    }
    this.isShowEmployeeList = !this.isShowEmployeeList;
  }

  update(): void{
    if(this.department){
      this.departmentSerivce.updateDepartment(this.department).subscribe(()=>this.location.back());
    }
  }

}
