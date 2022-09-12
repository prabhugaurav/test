import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FooterComponent,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
