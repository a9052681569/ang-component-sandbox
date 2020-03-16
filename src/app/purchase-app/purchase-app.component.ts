import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-purchase-app',
  templateUrl: './purchase-app.component.html',
  styleUrls: ['./purchase-app.component.css']
})
export class PurchaseAppComponent {
  _age: number
  @Input()
  set age(a: number) {
    if(a < 0) this._age = 0
    else if(a > 100) this._age = 100
    else this._age = a
  }
  get age() {
    return this._age
  }
  @Output() ageChange = new EventEmitter<number>()
  onAgeChange(num: number) {
    this.age = num
    this.ageChange.emit(num)
  }
  condition: boolean = true
  increace() {
    this.age++
    this.ageChange.emit(this.age)
  }
  decreace() {
    this.age--
    this.ageChange.emit(this.age)
  }
  toggler() {
    this.condition = !this.condition
  }
}
