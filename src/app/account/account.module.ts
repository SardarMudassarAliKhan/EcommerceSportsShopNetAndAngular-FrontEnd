import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    SigninComponent,
    RegisterComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule { }
