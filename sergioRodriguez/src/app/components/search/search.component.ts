import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() spreadUser = new EventEmitter<string>();
  public invalidInput = false;

  public userForm = new FormGroup ({
    name: new FormControl(''),
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  public submit() {
    if (this.userForm.value.name === '') {
      this.invalidInput = true;
    } else {
      this.invalidInput = false;
      this.spreadUser.emit(this.userForm.value.name);
    }
  }
}
