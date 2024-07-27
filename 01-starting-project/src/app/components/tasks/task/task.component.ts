import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task-model';
import { CardComponent } from '../../card/card.component';
import { TasksService } from '../../../services/task/tasks.service';
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

  constructor(private taskService: TasksService) {}

  completeTask() {
    this.taskService.removeTask(this.task.id);
  }
}
