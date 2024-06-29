import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './Pages/login-signup/login-signup.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DownloadsComponent } from './Pages/downloads/downloads.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { FormComponent } from './Pages/form/form.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'loginsignup',
        pathMatch: 'full'
    },
    {
        path: 'loginsignup',
        component: LoginSignupComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children:
        [
            {
                path: 'dashboard',
                component:DashboardComponent
            }
        ]
    },
    {
        path:'downloads',
        component:DownloadsComponent
    },
    {
        path:'contactus',
        component:ContactUsComponent
    },
    {
        path:'form',
        component:FormComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
