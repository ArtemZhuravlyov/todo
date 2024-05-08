import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { ListItem } from "../utils/list-item.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private todosRef = this.db.list('/todos');

  constructor(private db: AngularFireDatabase) {}

  getAllTodos(): Observable<any>{
    return this.todosRef.valueChanges();
  }

  addItem(item: ListItem) {
    const path = '/todos';

    this.db.object(`${path}/${item.id}`).set(item)
      .catch(error => {
        console.error('Error adding item:', error);
      });
  }

  updateItem(todoId: string, newData: any): Promise<void> {
    return this.todosRef.update(todoId, newData);
  }

  deleteItem(todoId: string): Promise<void> {
    return this.todosRef.remove(todoId)
      .catch(error => {
        console.error('Error deleting todo:', error);
      });
  }
}
