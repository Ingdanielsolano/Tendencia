import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FaceApiService } from './face-api.service'
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    FaceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
