import { DbzModule } from './dbz/dbz.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    DbzModule

  ]
})
export class AppModule { }
