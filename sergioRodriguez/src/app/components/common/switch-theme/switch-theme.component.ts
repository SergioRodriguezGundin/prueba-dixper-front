import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import * as configActions from 'src/app/redux/actions/config.actions';

/*
* NOTE: html and css doit for Benjamin Réthoré
* - change component to fit with css and html
*/

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss']
})
export class SwitchThemeComponent implements OnInit {
  public themeForm: FormGroup
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.themeForm = new FormGroup({
      value: new FormControl(false)
    })
    this.onChanges();
  }

  public onChanges() {
    this.themeForm.valueChanges.subscribe((isDark: {value: boolean}) => {
      this.store.dispatch(new configActions.SetTheme((isDark.value) ? 'dark' : 'light'));
    })
  }

}
