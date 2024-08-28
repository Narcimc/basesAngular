import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-pages.component';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  { path: '', component: MainPageComponent }
];

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormComponent
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})

export class DbzModule { }
