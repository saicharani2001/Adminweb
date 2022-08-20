import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminrgstrComponent } from './adminrgstr/adminrgstr.component';
import { AlterpageComponent } from './alterpage/alterpage.component';
import { LoginComponent } from './login/login.component';
import { ManagerdetailsComponent } from './managerdetails/managerdetails.component';
import { ManagerrgstrComponent } from './managerrgstr/managerrgstr.component';

const routes: Routes = [
  {path:'',redirectTo: 'login',pathMatch:'full'},
  {path:'adminrgstr',component:AdminrgstrComponent},
  {path:'login',component:LoginComponent},
  {path:'managerrgstr',component:ManagerrgstrComponent},
  {path:'managerdetails',component:ManagerdetailsComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'alterpage',component:AlterpageComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
