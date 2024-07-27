import { Component, Input, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskModel } from './new-task.model';
import { TasksService } from '../../../services/task/tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class AddTaskComponent {
  @Input() userId!: string;
  close = output<void>();
  enteredTitle = signal('');
  enteredDate = signal('');
  enteredSummary = signal('');

  constructor(private taskService: TasksService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmitForm() {
    this.taskService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId
    );
    this.onCancel();
  }
}
