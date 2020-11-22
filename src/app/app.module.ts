import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildOrderComponent } from './components/build-order/build-order.component';
import { IconComponent } from './components/icon/icon.component';
import { StringJoinPipe } from './pipes/string-join.pipe';
import { PointsPipe } from './pipes/points.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuildOrderComponent,
    IconComponent,
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
