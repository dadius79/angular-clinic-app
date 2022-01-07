import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';
import { MenuserviceService } from './menuservice.service';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [];

  constructor(private menuService: MenuserviceService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.menuService.getMenu().subscribe(menu => this.menu = menu);
  }

}
