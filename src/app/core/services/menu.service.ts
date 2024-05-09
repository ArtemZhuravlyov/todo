import { Injectable } from '@angular/core';
import { Menu } from "../utils/menu-interface";
import { MenuEnum, MenuIcons } from "../utils/menu-enum";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Menu[] = [
    { name: MenuEnum.Inbox, icon: MenuIcons.Inbox },
    { name: MenuEnum.Completed, icon: MenuIcons.Completed },
    { name: MenuEnum.Today, icon: MenuIcons.Today }
  ]
}
