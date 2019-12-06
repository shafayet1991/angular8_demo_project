import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {stringify} from 'querystring';


@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ;

  constructor() { }



  ngOnInit() {
  }

  refreshDataSource() {
    var dummyData = [
      {DepartmentID: '2313', DepartmentName: 'Applied Physics'},
      {DepartmentID: '2332', DepartmentName: 'Applied Chemistry'},
      {DepartmentID: '4345', DepartmentName: 'Mathematics Dept'},
    ];
  }

}
