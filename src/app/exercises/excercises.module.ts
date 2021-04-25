import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { e001Module } from './e001/e001.module';
import { FormsModule } from '@angular/forms';
import { E002Component } from './e002/e002.component';
import { E003Component } from './e003/e003.component';
import { E004Component } from './e004/e004.component';
import { E005Component } from './e005/e005.component';



@NgModule({
  declarations: [
  E002Component,
  E003Component,
  E004Component,
  E005Component],
  imports: [
    CommonModule,
    FormsModule,
    e001Module
  ]
})
export class ExcercisesModule { }