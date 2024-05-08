import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ListComponent } from "../../shared/list/list.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MenuComponent,
    ListComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  selectedMenuItem: string = 'Inbox'

  selectMenu(menu: string){
    this.selectedMenuItem = menu
  }
}
