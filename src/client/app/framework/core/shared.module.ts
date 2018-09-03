// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// libs

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
