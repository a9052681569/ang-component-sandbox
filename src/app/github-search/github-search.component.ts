import { Component, OnInit, Input } from '@angular/core';
import { fromEvent, Observable, Observer } from 'rxjs'
import { switchMap, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  
  
  count: number = 0;
  
  getRes() {
    const input = document.querySelector('.github-input')
    fromEvent(input, 'input')
    .pipe( debounceTime(500), switchMap((event: KeyboardEvent) => {
      return fetch(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`).then(res => res.json())
    }))
    .subscribe(res => isNaN(res.total_count) ? '' : this.count = res.total_count)
    
  }
  increacer() {
    const o = Observable.create((observer: Observer<any>) => {
      setInterval(() => {
        observer.next(this.count + 1)
      }, 1000)
    })
    o.subscribe({
      next: (value: number) => this.count = value
    })
  }
  
  ngOnInit() {
    this.getRes()
    this.increacer()
  }
  
}
