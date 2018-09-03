// angular
import { Injector, NgModule } from '@angular/core';
import { BrowserModule, makeStateKey } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

// libs
import { ConfigLoader, ConfigService } from '@ngx-config/core';
import { MetaLoader } from '@ngx-meta/core';
import { ANGULARTICS2_TOKEN } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// framework
import { configFactory, CoreModule, metaFactory } from '~/app/framework/core/core.module';
import { SharedModule } from '~/app/framework/core/shared.module';
import { HttpInterceptorModule } from '~/app/framework/http/http-interceptor.module';
import { MaterialModule } from '~/app/framework/material/material.module';
import { AnalyticsModule } from '~/app/framework/analytics/analytics.module';

// module
import { HeaderComponent } from '~/app/layout/header/header.component';
import { FooterComponent } from '~/app/layout/footer/footer.component';
import { MainComponent } from '~/app/layout/main.component';
import { LoginComponent } from '~/app/login/login.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AppSettings } from '~/app/app.settings';
import { SidenavMenuComponent } from '~/app/layout/sidenav-menu/sidenav-menu.component';
import { AppService } from './app.service';

export const REQ_KEY = makeStateKey<string>('req');

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {suppressScrollX: true};

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app-id' }),
    TransferHttpCacheModule,
    RouterModule.forRoot(routes),
    PerfectScrollbarModule,
    CoreModule.forRoot([
      {
        provide: ConfigLoader,
        useFactory: configFactory,
        deps: [Injector]
      },
      {
        provide: MetaLoader,
        useFactory: metaFactory,
        deps: [ConfigService]
      }
    ]),
    SharedModule,
    HttpInterceptorModule,
    MaterialModule,
    AnalyticsModule.forRoot([
      {
        provide: ANGULARTICS2_TOKEN,
        useValue: {
          providers: [Angulartics2GoogleAnalytics],
          settings: {}
        }
      }
    ])
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidenavMenuComponent,
    LoginComponent,
    AppComponent
  ],
  providers: [
    AppSettings,
    AppService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
