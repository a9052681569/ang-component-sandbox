import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PurchaseAppComponent } from './purchase-app/purchase-app.component';
import { BoldDirective } from './bold.directive'
import { WhileDirective } from './while.directive';
import { PhonesComponent } from './phones/phones.component';
import { FormComponent } from './form/form.component';
import { GithubSearchComponent } from './github-search/github-search.component'

@NgModule({
  declarations: [
    AppComponent,
    PurchaseAppComponent,
    BoldDirective,
    WhileDirective,
    PhonesComponent,
    FormComponent,
    GithubSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
