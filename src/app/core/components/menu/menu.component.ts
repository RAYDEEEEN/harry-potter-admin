import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@shared/interfaces/menu-item.interface';

@Component({
  selector: 'hpa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Personnages', icon: 'character', link: 'characters' },
      { label: 'Maisons', icon: 'house', link: 'houses' },
      { label: 'Sorts', icon: 'sort', link: 'sorts' }
    ];
  }
}
