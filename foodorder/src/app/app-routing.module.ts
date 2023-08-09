import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import{CartComponent } from './cart/cart.component';
import {OrdersComponent} from './orders/orders.component'
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './sharedGuard/auth.guard';
const routes: Routes = [
  {path:'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path:'search/:searchItem', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo: 'login', pathMatch: "full"},
  {path:'SignUp',component: SignUpComponent},
  {path:'ResetPwd',component:ForgotPwdComponent},
  {path:'newpassword',component:NewpasswordComponent},
  {path: 'cart', component: CartComponent, canActivate:[AuthGuard]},
  {path:'orders', component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'header',component:HeaderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
