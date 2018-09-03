import { Component, OnInit, Input, HostBinding, ViewChild } from '@angular/core';
import { SidenavMenuService } from './sidenav-menu.service';
import { SidenavMenu } from './sidenav-menu.model';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
  providers: [ SidenavMenuService ]
})
export class SidenavMenuComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;
  menuItems: Array<SidenavMenu>;
  menuParentId: number;
  parentMenu: Array<any>;

  constructor(private sidenavMenuService: SidenavMenuService) {
    this.menuParentId = 0;
  }

  ngOnInit(): void {
    this.menuItems = this.sidenavMenuService.getSidenavMenuItems();
    this.parentMenu = this.menuItems.filter(item => item.parentId === this.menuParentId);
  }

  onClick(menuId: number): void {
    this.sidenavMenuService.toggleMenuItem(menuId);
    this.sidenavMenuService.closeOtherSubMenus(this.menuItems, menuId);
  }

  close(): void {
    this.sidenav.close();
  }

  toggle(): void {
    this.sidenav.toggle();
  }

}
