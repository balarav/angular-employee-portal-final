import { Injectable } from '@angular/core';
import { Employee } from './Model/Employee';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  employeeList : Employee[];


  getEmployeeDetail() {
    return {
      Id: 10,
      Firstname: "ba",
      Lastname: "ba"
    }
  }


  getEmployeeData() {
    this.employeeList = [
      {
        Id: 1,
        Firstname:"balaji",
        Lastname: "ravichandran"
      },
      {
        Id: 2,
        Firstname:"subbu",
        Lastname: "raj"
      } 
    ];

    return this.employeeList;
  }


  getEmployeeDataAsync()  {
    return this.http.get("http://localhost:5000/api/Employees");
  }

}
