import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Calcu } from 'src/app/models/calcu.model';
import { Observable } from 'rxjs';
import * as CalculatorAction from '../../actions/caculator.action'
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  currentNumber$: Observable<Calcu>;
  content: string = '0'
  constructor(private store:Store<{calculator:Calcu}>){
    this.currentNumber$ = store.select('calculator');
  }
  
  ngOnInit(): void {
    this.currentNumber$.subscribe((data)=>{
      this.content = data.currentNumber + data.operator + data.previousNumber;
    });
  }
  keyPressed(key:string ,type:string){
    this.store.dispatch(CalculatorAction.keyPressed({
      key: key,
      keyType : type,
    }));
  }
}
