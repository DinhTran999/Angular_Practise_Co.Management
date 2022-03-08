import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/model/employee.model';
import { EmployeeService } from 'src/app/core/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  departmentId: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees=>this.employees=employees);
  }

  // getEmployees(): void {
  //   this.departmentId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.employeeService
  //     .getEmployees(this.departmentId)
  //     .subscribe((employees) => (this.employees = employees));
  // }
}
