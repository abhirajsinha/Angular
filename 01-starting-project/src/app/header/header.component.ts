import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  // inline Html
  //   template: '<h1>Hello</h1>',
  templateUrl: './header.component.html',
  //  inline style
  //  styles: ['h1 {color:red}'],
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
