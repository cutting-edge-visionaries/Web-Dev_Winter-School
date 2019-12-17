import { Component } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template:`
    <form [formGroup]='form' (ngSubmit)='addsum()'>
      <h1>Add 2 Numbers</h1>
      <input type='text' formControlName='id1' placeholder='Enter id1' />
      <input type='text' formControlName='id2' placeholder='Enter id2' />
      <button>Submit</button>
      <div>Added is {{addedValue}} </div>
    </form>
  `
})

export class AppComponent {
 public addedValue:number = 0 ;

  form = new FormGroup({
    id1:new FormControl(),
    id2:new FormControl()
  });
  addsum(){
    // event.preventDefault();
    this.addedValue = +this.form.value.id1 + +this.form.value.id2;
      
  }
}
