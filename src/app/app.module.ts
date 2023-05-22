import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobFormsComponent } from './job-forms/job-forms.component';
import { CustomValidatorsService } from './custom-validators.service';

@NgModule({
  declarations: [
    AppComponent,
    JobFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomValidatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
