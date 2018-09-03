// angular
import { Component, OnInit } from '@angular/core';

// libs
import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';

// styles
import '~/assets/sass/lib.scss';
import '~/assets/sass/styles.scss';
import { AppSettings } from '~/app/app.settings';
import { Settings } from '~/app/models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent implements OnInit {

  loading = false;
  settings: Settings;

  constructor(
    public appSettings: AppSettings,
    private readonly config: ConfigService
  ) {
    super();
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
  }
}
