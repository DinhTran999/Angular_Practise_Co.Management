import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Department } from 'src/app/core/model/department.model';
import { DepartmentService } from 'src/app/core/service/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService
      .getDepartments()
      .subscribe((departments) => (this.departments = departments));
  }

  onDelete(department: Department) {
    this.departmentService.deleteDepartment(department.id).subscribe({
      next: (dept) =>
        (this.departments = this.departments.filter(
          (d) => d.id !== dept.id
        )),
      error: (error) => console.log(error),
      complete: () => console.log('delete success full'),
    });
  }

  add(name: string, startDate: string) {
    name = name.trim();
    startDate = startDate.trim();
    if (name && startDate) {
      this.departmentService
        .addDepartment({ name, startDate } as Department)
        .subscribe((department) => this.departments.push(department));
    }
  }
}
