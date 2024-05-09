import { map, Observable } from "rxjs";
import { ListItem } from "../utils/list-item.interface";
import { Injectable } from "@angular/core";
import { FirebaseService } from "./firebase.service";

@Injectable({
  providedIn: 'root'
})
export class ListService{

  constructor(private readonly firebaseService: FirebaseService) {
  }

  inbox$ = this.firebaseService.getAllTodos().pipe(
    map((list: ListItem[]) =>
      list.sort((a, b) => {

        const completionComparison = a.completed === b.completed ? 0 : a.completed ? 1 : -1;

        if (completionComparison === 0) {
          return +b.id - +a.id;
        }

        return completionComparison;
      })
    )
  )

  completed$ = this.firebaseService.getAllTodos().pipe(
    map((list: ListItem[]) => list.filter(item => item.completed))
  )

  today$: Observable<ListItem[]> = this.firebaseService.getAllTodos().pipe(
    map((list: ListItem[]) => {

      return list.filter(item => {
          if (item.dueDate){
            const today = new Date();
            const itemDate = new Date(item.dueDate)

            const todayYear = today.getFullYear();
            const todayMonth = today.getMonth();
            const todayDay = today.getDate();

            const itemYear = itemDate.getFullYear();
            const itemMonth = itemDate.getMonth();
            const itemDay = itemDate.getDate();
            return todayYear === itemYear && todayMonth === itemMonth && todayDay === itemDay
          }

          return
        }
    )})
  )

}
