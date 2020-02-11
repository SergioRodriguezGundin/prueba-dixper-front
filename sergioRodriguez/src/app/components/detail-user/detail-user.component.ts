import { Component, OnInit, Input } from '@angular/core';
import { BaseGithubUser } from 'src/app/redux/models/user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  @Input() user: BaseGithubUser;

  constructor() { }

  ngOnInit(): void {
  }

}
