import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user-model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) user!: User;
  @Output() selectedId = new EventEmitter();
  // @Input() selected!: boolean;

  user = input.required<User>()
  selected = input.required<boolean>()

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
    return `assets/users/${this.user().avatar}`;
  }

  onSelectUser() {
    this.selectedId.emit(this.user().id);
  }
}
