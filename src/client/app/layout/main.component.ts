// angular
import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';
import { AppSettings } from '../app.settings';
import { AppService } from '../app.service';
import { SidenavMenuService } from '../layout/sidenav-menu/sidenav-menu.service';
import { Product, Settings } from '../models/index';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.scss'],
  providers: [SidenavMenuService]
})
export class MainComponent extends BaseComponent implements AfterViewInit {

  showBackToTop: boolean = false;
  @ViewChild('sidenavmenu') sidenavmenu: any;
  settings: Settings;

  constructor(
    public appSettings: AppSettings,
    public appService: AppService,
    public sidenavMenuService: SidenavMenuService,
    public router: Router
  ) {
    super();
    this.settings = this.appSettings.settings;
  }

  onActivate(event$: any, scrollContainer: any): void {
    scrollContainer.scrollTop = 0;
  }

  scrollToTop(): void {
    // TODO: implementar esto
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('cerrar el chabon');
        this.sidenavmenu.close();
      }
    });
    this.sidenavMenuService.expandActiveSubMenu(this.sidenavMenuService.getSidenavMenuItems());
  }
}
