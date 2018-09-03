// angular
import { Component } from '@angular/core';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent extends BaseComponent {

  constructor() {
    super();
  }

}
