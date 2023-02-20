import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import * as CalculatorAction from '../actions/caculator.action'
import { Calcu } from "../models/calcu.model";


const initialState = <Calcu> {
    currentNumber : '0',
    previousNumber: '0',
    resulf:'0',
    operator: '',
};



export const calculatorReducer =createReducer(
    initialState,
    on(CalculatorAction.keyPressed,(state , action) => {
        if(action.keyType=="number"){
            let newState={...state};
            if(action.key=='.' && !state.currentNumber.includes('${sate.currentNumber}.')){
                if(!state.currentNumber.includes('.')){
                    newState.currentNumber=state.currentNumber + '.';
                }
                console.log(newState);
                return newState
            }
        }
        return state;
    })
);