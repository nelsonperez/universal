// angular
import { Component, OnInit } from '@angular/core';

// libs
import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';
// import { I18NRouterService } from '@ngx-i18n-router/core';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';
import { I18NState, Init } from '~/app/framework/i18n/i18n.module';

// styles
import '~/assets/sass/lib.scss';
import '~/assets/sass/styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(private readonly i18nStore: Store<I18NState>,
              private readonly config: ConfigService) {
    super();
  }

  ngOnInit(): void {
    this.i18nStore.dispatch(new Init(this.config.getSettings('i18n')));
  }
}
