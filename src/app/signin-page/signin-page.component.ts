import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {

  signinForm: FormGroup;
  isLoginMode:boolean = true;


  constructor() { }

  ngOnInit(): void {
     this.signinForm = new FormGroup({
       'email': new FormControl(null, [Validators.required, Validators.email]),
       'password': new FormControl(null, Validators.required)
     });
  }

  onSubmit(): void {

    console.log(this.signinForm.value);    
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

}
