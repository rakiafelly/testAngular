import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListpostComponent } from './listpost/listpost.component';
import { AddpostComponent } from './addpost/addpost.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListpostComponent,
    AddpostComponent,
    UpdatepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
