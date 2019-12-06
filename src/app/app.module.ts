import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { ShowDepartmentComponent } from './department/show-department/show-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';

import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ShowEmployeeComponent,
    ShowDepartmentComponent,
    AddDepartmentComponent,
    EditDepartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [DepartmentService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
