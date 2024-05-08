import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItem } from "../../core/utils/list-item.interface";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    MatCheckbox,
    MatIconButton,
    MatIcon,
    DatePipe
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input() card!: ListItem
  @Output() onTodoCheck = new EventEmitter<ListItem>()
  @Output() onDeleteTodo = new EventEmitter<ListItem>()

  onCheckboxChange(todo: ListItem){
    todo.completed = !todo.completed
    this.onTodoCheck.emit(todo)
  }

  deleteItem(todo: ListItem){
    this.onDeleteTodo.emit(todo)
  }
}
