import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/redux/app.reducer';
import { Store } from '@ngrx/store';
import * as configActions from 'src/app/redux/actions/config.actions';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    setTimeout(function () {
      this.store.dispatch(new configActions.SetDefaultErrorState());
    }.bind(this), 3000);
  }

}
