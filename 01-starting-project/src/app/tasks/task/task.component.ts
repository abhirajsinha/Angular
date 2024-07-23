import { Component, EventEmitter, Input, input, Output } from '@angular/core'
import { Task } from './task-model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // task = input<Task>;
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();

  completeTask(){
    this.complete.emit(this.task.id);
  }
}
