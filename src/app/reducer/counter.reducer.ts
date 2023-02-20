
// import * as CounterAction from '../actions/counter.action';
// import { Counter } from "../module/counter.model";
// import { Calcu } from '../module/calcu.module'
// import { createReducer, on } from '@ngrx/store';
// const initialState: Calcu = {
//     currentnumber: '0',
//     previousnumber: '0',
//     resulf: '0'
// };
// export const counterReducer = createReducer(
//     initialState,
// on(CounterAction.increment,state=>({count:state.count+1})),
// on(CounterAction.decrement,state=>({count:state.count -1})),
// on(CounterAction.reset, state=>({count:0})),

// on(CounterAction.seven, (state, action) => {
//     return {
//         ...state,
//         currentnumber: action.number,

//     }
// }),



// on(CounterAction.eight, state=>({value:8})),
// on(CounterAction.nine, state=>({value:9})),
// );
// export const caculatoReducer = createReducer(
//     initialState,
//     on(CounterAction.seven, (state, action) => {
//         return {
//             ...state,
//             currentnumber: action.number,
//         }
//     }),

    // on(CounterAction.result, (state, action) => {
    //     if (action.result == '+') {
    //         return {
    //             ...state,
    //             currentnumber: (parseFloat(state.currentnumber) / 100).toString(),
    //         }
    //     }
    // })
// );





