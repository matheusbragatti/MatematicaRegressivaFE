import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  signupForm: FormGroup;
  initialPassword: string;
  checkedPassword: string;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'email' : new FormControl(null,  [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'passwordCheck': new FormControl(null, [Validators.required, this.checkPassword.bind(this)]),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required)
    });
    this.signupForm.get('password').valueChanges.subscribe(
      (value) => this.initialPassword = value
    );
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  checkPassword(control: FormControl): {[s:string]: boolean}{
    if( this.initialPassword === control.value )
    return null;
    else{

      return {'passwordDontMatch': true}
    }
  }

}
