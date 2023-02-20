import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { decrement, increment, reset } from './actions/counter.action';
// import * as CounterAction from './actions/counter.action'
import { Counter } from '../app/models/counter.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  count$: Observable<Counter>;

  constructor(private store:Store<{count:Counter}>){
    this.count$ = store.pipe(select('count'));
  }
  // increment(){
  //   this.store.dispatch(CounterAction.increment());
  // }
  // decrement(){
  //   this.store.dispatch(CounterAction.decrement());
  // }
  // reset(){
  //   this.store.dispatch(reset());
    
  // }
}
