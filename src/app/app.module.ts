import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgoodcompComponent } from './agoodcomp/agoodcomp.component';
import { FootComponent } from './foot/foot.component';
import { HandComponent } from './hand/hand.component';
import { ToeComponent } from './toe/toe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AgoodcompComponent,
    FootComponent,
    HandComponent,
    ToeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
