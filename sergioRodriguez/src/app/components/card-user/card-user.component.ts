import { Component, OnInit, Input } from '@angular/core';
import { BaseGithubUser } from 'src/app/redux/models/user.model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() user: BaseGithubUser;

  constructor() { }

  ngOnInit(): void {
  }

}
