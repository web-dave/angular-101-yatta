import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { AboutModule } from './about/about.module';
import { PreloadDelayed } from './shared/preload-delayed';

@NgModule({
  declarations: [AppComponent, MyNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [PreloadDelayed],
  bootstrap: [AppComponent]
})
export class AppModule {}
