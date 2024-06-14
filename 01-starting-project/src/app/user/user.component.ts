import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input() id!: string;
  @Output() selectedId = new EventEmitter();
  // take inputs as signals
  /*
  avatar = input<string>('avatar');
  name = input<string>('name');
  id = input<string>('id');

  //required inputs
  avatar = input.required<string>()
  name = input.required<string>()
  id = input.required<string>()
  */

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.selectedId.emit(this.id);
  }
}
