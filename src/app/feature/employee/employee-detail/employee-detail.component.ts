import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/model/employee.model';
import { EmployeeService } from 'src/app/core/service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employee!: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employee = this.router.getCurrentNavigation()?.extras.state as Employee;
  }

  ngOnInit(): void {
    // this.getEmployee();
  }

  // getEmployee(): void {
    
  //   const employeeId = Number(this.route.snapshot.paramMap.get('employId'));//phải trùng với tên biến đã khai báo trong appRouting
  //   const departmentId = Number(this.route.snapshot.paramMap.get('deptId'));
  //   console.log('departmentid: '+departmentId);
  //   console.log('employ: '+employeeId);
  //   this.employeeService
  //     .getEmployee(departmentId, employeeId)
  //     .subscribe((employee) => (this.employee = employee));
  // }


}
