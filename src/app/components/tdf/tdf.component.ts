import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
})
export class TdfComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  topics = ['Angular', 'React', 'Vue'];

  userModel: User = new User('', '', null, '', '', false);

  onSubmit(form) {
    console.log(this.userModel);
    console.log(form);
  }
}
