// angular
import { Component } from '@angular/core';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent extends BaseComponent {

  showBackToTop: boolean = false;

  onActivate(event$: any, scrollContainer: any): void {
    scrollContainer.scrollTop = 0;
  }

  scrollToTop(): void {
    // TODO: implementar esto
  }

}
