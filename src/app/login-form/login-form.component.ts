import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('loginForm')
  myForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }

}
