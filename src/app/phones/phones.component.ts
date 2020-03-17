import { Component, OnInit } from '@angular/core';
import { DataService } from './phone-data.service'
import { Phone } from './phone'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  providers: [DataService]
})
export class PhonesComponent implements OnInit {
  public items: Phone[] = []
  myForm: FormGroup;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: '',
      price: ''
    })
  }

  public addItem() {
    this.dataService.addData(this.myForm.value.name, this.myForm.value.price)
  }
  ngOnInit() {
    this.items = this.dataService.getData()
  }
  public deleteItem(i) {
    this.dataService.deleteData(i)
  }
}
