import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule} from "@angular/forms";
import { RmgHomeComponent } from './rmg-home/rmg-home.component';
import { RegisterResourceComponent } from './register-resource/register-resource.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'rmgHome', component:RmgHomeComponent},
  {path:'register', component:RegisterResourceComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
