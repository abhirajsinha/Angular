import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskModel } from './new-task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class AddTaskComponent {
  cancel = output<void>();
  add = output<NewTaskModel>();
  enteredTitle = signal('');
  enteredDate = signal('');
  enteredSummary = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmitForm() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate(),
    });
  }
}
