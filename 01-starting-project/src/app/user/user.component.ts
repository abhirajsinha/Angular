import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[0]);

  // when usign signal using computed property: because it will only be called when the selected user is changed not every time so thats very efficient.
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  // compute image path when not using signal
  /* get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  } */

  onSelectUser() {}
}
