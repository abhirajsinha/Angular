import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task-model';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // task = input<Task>;
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();

  completeTask() {
    this.complete.emit(this.task.id);
  }
}
