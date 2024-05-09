import { Component, Input } from '@angular/core';
import { ListItem } from "../../core/utils/list-item.interface";
import { AsyncPipe } from "@angular/common";
import { TodoCardComponent } from "../todo-card/todo-card.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconButton, MatMiniFabButton } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { MatDatepickerModule, } from "@angular/material/datepicker";
import { provideNativeDateAdapter } from '@angular/material/core';
import { FirebaseService } from "../../core/services/firebase.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    AsyncPipe,
    TodoCardComponent,
    ReactiveFormsModule,
    MatIconButton,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatMiniFabButton,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent{
  @Input() selectedMenuItem!: string
  @Input() list: ListItem[] = []

  todoForm: FormGroup = this.formBuilder.group({
    title: [null, [Validators.required]],
    dueDate: [null],
    completed: [false],
    description: [null]
  })

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly firebaseService: FirebaseService) {
  }

  addToDo(){
    const dueDate = this.todoForm.get('dueDate')?.getRawValue().toString()

    const newTodo = {
      ...this.todoForm.getRawValue(),
      dueDate: dueDate,
      id: new Date().getTime().toString()
    }

    this.firebaseService.addItem(newTodo)
    this.todoForm.reset()
  }

  todoChecked(todo: ListItem){
    this.firebaseService.updateItem(todo.id, todo)
  }

  deleteTodo(todo: ListItem){
    this.firebaseService.deleteItem(todo.id)
  }

}
