import { createAction, props } from "@ngrx/store";


// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter component] Reset');




export const ac= createAction('[Caculato Component] Ac');
export const divide= createAction('[Caculato Component] Divide');
export const seven=createAction('[Caculato Component] Seven', props<{number:string}>());
export const addition=createAction('[Caulato Component], Addition');
export const multiply=createAction('[Caulato Component], Multiply', props<{number1 :number,number2 :number}>);
export const subtraction=createAction('[Caulato Component], Subtraction');

export const result = createAction(
    '[Calcu] Result',
    props<{result:string}>()
)


// export const eight
