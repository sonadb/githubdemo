import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectEnquiryComponent } from './project-enquiry/project-enquiry.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:"projects",component:ProjectListComponent},
  {path:"project-enquiry",component:ProjectEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
