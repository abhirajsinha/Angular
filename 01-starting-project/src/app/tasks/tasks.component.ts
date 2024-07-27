import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../user/user-tasks';
import { AddTaskComponent } from './new-task/new-task.component';
import { type NewTaskModel } from './new-task/new-task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUsedId?: string;
  @Input({ required: true }) name?: string;
  isAddingTask: boolean = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUsedId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  closeDialog() {
    this.isAddingTask = !this.isAddingTask;
  }

  onAddTask(taskData: NewTaskModel) {
    this.tasks.push({
      id: Math.random().toString(36).substr(2, 9),
      userId: this.selectedUsedId!,
      dueDate: taskData.date,
      title: taskData.title,
      summary: taskData.summary,
    });

    this.closeDialog();
  }
}
