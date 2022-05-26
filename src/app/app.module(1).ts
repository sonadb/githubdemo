import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEnquiryComponent } from './project-enquiry/project-enquiry.component';
import { ProjectTypesService } from './project-types.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectEnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProjectTypesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
