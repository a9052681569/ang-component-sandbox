import { Component, OnInit } from '@angular/core';
import { DataService } from './phone-data.service'
import { Phone } from './phone'

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  providers: [DataService]
})
export class PhonesComponent implements OnInit {
  items: Phone[] = []
  constructor(private dataService: DataService) {}

  addItem(name: string, price: number) {
    this.dataService.addData(name, price)
  }
  ngOnInit() {
    this.items = this.dataService.getData()
  }
  deleteItem(i) {
    this.dataService.deleteData(i)
  }
}
