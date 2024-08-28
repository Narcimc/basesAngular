import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './app/counter/counter.module';
import { RouterModule } from '@angular/router';
import { HeroesModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DbzModule } from './app/dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CounterModule,
    HeroesModule,
    CommonModule,
    DbzModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
