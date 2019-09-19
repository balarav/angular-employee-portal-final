import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ThrowStmt } from '@angular/compiler';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor(private empSvc : EmployeeService) { }

 
  ngOnInit() {

    //this.emp = this.empSvc.getEmployeeDetail();

  }

}
