import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './new-task/new-task.component';
import { TasksService } from '../../services/task/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUsedId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUsedId);
  }

  closeDialog() {
    this.isAddingTask = !this.isAddingTask;
  }
}
