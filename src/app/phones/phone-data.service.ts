import { Injectable, Optional } from '@angular/core'
import { Phone } from './phone'
import { LogService } from '../log.service'
@Injectable()
export class DataService {
    private data: Phone[] = [
        { name: 'Apple iPhone 7', price: 56000, id: Math.random() },
        { name: 'HP Elite x3', price: 56000, id: Math.random() },
        { name: 'Alcatel Idol S4', price: 25000, id: Math.random() }
    ]
    constructor(@Optional() private logService: LogService) {}
    getData(): Phone[] {
        if (this.logService) this.logService.write('операция получения данных')
        return this.data
    }
    addData(name: string, price: number) {
        this.data.push(new Phone(name, price, Math.random()))
        if (this.logService) this.logService.write('операция добавления данных')
    }
    deleteData(i) {
        this.data.forEach((item, index, arr) => {
            if (i == item.id) {
                arr.splice(index, 1)
            }
        })
        if (this.logService) this.logService.write('операция удаления данных')
    }
}