import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppState } from './redux/app.reducer';
import * as fromConfig from '../app/redux/reducers/config.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  public error$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.error$ = this.store.pipe(select(fromConfig.getError), map((error: boolean) => error));
  }
}
