import { Injectable } from '@angular/core';
import { Menu } from "../utils/menu-interface";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Menu[] = [
    { name: 'Inbox', icon: 'inbox'},
  ]
}
