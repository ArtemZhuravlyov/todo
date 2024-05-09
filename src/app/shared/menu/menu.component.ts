import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuService } from "../../core/services/menu.service";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { Menu } from "../../core/utils/menu-interface";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuItemComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() selectedMenuItem = new EventEmitter<string>()
  @Input() totalItemsCount: number | null = 0
  menu = this.menuService.menu
  selectedItem: string = 'Inbox'

  constructor(
    private readonly menuService: MenuService
  ) {}


  menuClick(item: Menu){
    this.selectedItem = item.name
    this.selectedMenuItem.emit(item.name)
  }

}
