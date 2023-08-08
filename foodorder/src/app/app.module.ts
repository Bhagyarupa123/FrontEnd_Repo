import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CurrencyPipe } from '@angular/common';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ForgotPwdComponent,
    LoginComponent,
    SignUpComponent,
    NewpasswordComponent,
    CartComponent,
    OrdersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FormsModule,
   ],
  providers: [
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
