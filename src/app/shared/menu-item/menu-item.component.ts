import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menu } from "../../core/utils/menu-interface";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() item!: Menu
  @Input() count: number = 0
  @Input() selected: boolean = false
  @Output() menuItemClick = new EventEmitter<Menu>()

  onClick(item: Menu){
    this.menuItemClick.emit(item)
  }
}
