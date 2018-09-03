// angular
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// libs
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';
import { AuthService } from '@ngx-auth/core';
import {} from '@types/googlemaps';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';

import { SidenavMenuComponent } from './../sidenav-menu/sidenav-menu.component';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../models/index';
import { AppService } from '../../app.service';
import { SidenavMenuService } from '../sidenav-menu/sidenav-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss'],
  providers: [SidenavMenuService]
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Input()
  sidenavmenu: SidenavMenuComponent;
  settings: Settings;
  geocoder: any;
  title: string;
  isAuthenticated: boolean;
  provincias: Array<any> = [];

  constructor(
    public appSettings: AppSettings,
    public appService: AppService,
    public sidenavMenuService: SidenavMenuService,
    public router: Router,
    private readonly config: ConfigService,
    private readonly auth: AuthService
  ) {
    super();
  }

  ngOnInit(): void {
    this.settings = this.appSettings.settings;
    this.title = this.settings.name;
    this.isAuthenticated = this.auth.isAuthenticated;
    // TODO: Traer provincias disponibles
  }

  logout(): void {
    this.auth.invalidate();
    this.isAuthenticated = this.auth.isAuthenticated;
    this.router.navigate(['/']);
  }

  // TODO: implementar locale User
  locateUser(): void {
    /*
    let provincia = false;
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const location = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({ latLng: location }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            // tslint:disable-next-line:prefer-template
            if (results[1]) {
              let departemento = false;
              // tslint:disable-next-line:prefer-for-of
              for (let i = 0; i < results.length; i++) {
                if (
                  (!departemento || !provincia) &&
                  results[i].types[0] === 'locality'
                ) {
                  (departemento = results[i].address_components[0].short_name),
                    (provincia = results[i].address_components[2].short_name);
                }
              }
            }
            console.log(provincia);
          } else {
            // tslint:disable-next-line:prefer-template
            console.log('Geocoder failed due to: ' + status);
          }
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
    */
  }

  getProvinciasDisponibles(): void {
    this.provincias = [{ name: 'Mendoza' }];
  }

  // TODO
  closeSubMenus(): void {
    console.log('TODO: closeSubMenus');
  }

  search(): void {
    console.log('TODO: closeSubMenus');
  }

  stopClickPropagate(event: any): any {
    event.stopPropagation();
    event.preventDefault();
  }

}
