import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  topics = ['Angular', 'React', 'Vue'];

  userModel: User = new User('', '', null, '', '', false);

  onSubmit(form) {
    console.log(this.userModel);
    console.log(form);
  }
}
