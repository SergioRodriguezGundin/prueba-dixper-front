import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() spreadUser = new EventEmitter<string>();

  public userForm: FormGroup = new FormGroup ({
    name: new FormControl('', [
      Validators.minLength(4)
    ]),
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  get name() { return this.userForm.get('name'); }

  public submit() {
    if (this.userForm.valid) {
      this.spreadUser.emit(this.userForm.value.name);
    }
  }
}
