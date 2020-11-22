import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildOrderComponent } from './components/build-order/build-order.component';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { StringJoinPipe } from './pipes/string-join.pipe';
import { PointsPipe } from './pipes/points.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuildOrderComponent,
    ActionIconComponent,
    StringJoinPipe,
    PointsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
