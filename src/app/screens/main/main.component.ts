import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";
import { ListComponent } from "../../shared/list/list.component";
import { map, Observable } from "rxjs";
import { ListItem } from "../../core/utils/list-item.interface";
import { AsyncPipe } from "@angular/common";
import { ListService } from "../../core/services/list-service";
import { MenuEnum } from "../../core/utils/menu-enum";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MenuComponent,
    ListComponent,
    AsyncPipe
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  selectedMenuItem: string = MenuEnum.Inbox
  list$ = new Observable<ListItem[]>
  totalItemsCount$ = this.list$.pipe(
    map((list: ListItem[]) => list.length)
  )

  constructor(private readonly listService: ListService) {
    this.switchList(this.selectedMenuItem)
  }

  selectMenu(menu: string){
    this.switchList(menu)
    this.selectedMenuItem = menu
  }

  switchList(menu: string){
    switch (menu){
      case MenuEnum.Inbox:
        this.list$ = this.listService.inbox$
        break
      case MenuEnum.Completed:
        this.list$ = this.listService.completed$
        break
      case MenuEnum.Today:
        this.list$ = this.listService.today$
        break
    }
  }

}
