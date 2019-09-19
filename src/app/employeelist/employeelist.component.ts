import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee';
import { EmployeeService } from '../employee.service';
import { debug } from 'util';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  providers: [ ]
})
export class EmployeelistComponent implements OnInit {

  title = "Employee list page";

  employeeList: Employee[];

  selectedEmployee: Employee;

  constructor(private newSvc: EmployeeService) { }

  subCallback = (function(data) {
    debugger;
    this.employeeList = data;
  }).bind(this);

  ngOnInit() {

   //this.employeeList = this.newSvc.getEmployeeData();

    this.newSvc.getEmployeeDataAsync().subscribe(this.subCallback);

  }

  onEmpSelected(emp) {
    this.selectedEmployee = emp;
  }
}
