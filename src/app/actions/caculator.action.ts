import { createAction, props } from "@ngrx/store";


export const keyPressed = createAction( 
    '[Calculator] keyPressed',
    props<{key:string , keyType:string}>(),
)
export const prinResult =createAction(
    '[Calulator] Result',
    props<{result:string}>(),
)