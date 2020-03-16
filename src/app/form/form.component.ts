import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup
  reg: RegExp = /(\+7|8)\d{10}/
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required, this.nameValidator]],
      email: ['', [Validators.email, Validators.required]],
      tel: ['+7', [Validators.required, Validators.pattern(this.reg)]]
    })
  }
  nameValidator(control: FormControl) {
    return control.value === 'нет' ? { name: true } : null
  }
  ngOnInit() {
  }
  submit() {
    console.log(this.myForm)
  }
}
