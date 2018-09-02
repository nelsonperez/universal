// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// libs

// framework
import { SharedModule } from '~/app/framework/core/shared.module';
import { MaterialModule } from '~/app/framework/material/material.module';

// routes & components
import { routes } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
