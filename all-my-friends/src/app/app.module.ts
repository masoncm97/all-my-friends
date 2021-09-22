import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContextComponent } from './context/context.component';
import { RotatingImageContainerComponent } from './rotating-image-container/rotating-image-container.component';
import { ScrollingTextComponentComponent } from './scrolling-text-component/scrolling-text-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContextComponent,
    NavComponent,
    RotatingImageContainerComponent,
    ScrollingTextComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
