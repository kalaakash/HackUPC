import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CommonService } from './common.service';
import { MongoLinkComponent } from './mongo-link.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    MongoLinkComponent
  ],
  imports: [
    BrowserModule, HttpModule , FormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class MongoLinkModule { }