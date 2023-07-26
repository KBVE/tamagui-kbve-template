//?     [Storage]
import { atom, WritableAtom, task } from "nanostores";  //*     [IMPORT]
//*     [DATA]
export const misc$: WritableAtom<undefined> = atom(undefined); //* Misc Object
export const flow$: WritableAtom<undefined> = atom(undefined); //* Flow Object
export const temp$: WritableAtom<undefined> = atom(undefined);  //* Temp Object
export const debug$: WritableAtom<undefined> = atom(undefined); //* <Debug Message>
export const wolfwood$: WritableAtom<undefined> = atom(undefined); //? Of course its heavy, its full of mercy.
//?     [?Toast]
export const position$: WritableAtom<undefined> = atom(undefined);
export const toast$: WritableAtom<undefined> = atom(undefined);
//?     [?User]
export const email$: WritableAtom<undefined> = atom(undefined);
export const password$: WritableAtom<undefined> = atom(undefined);
export const user$: WritableAtom<undefined> = atom(undefined);
//?     [?Tasks]
export const void$: WritableAtom<undefined> = atom(undefined);
export const minion$: WritableAtom<undefined> = atom(undefined);
export const status$: WritableAtom<undefined> = atom(undefined);
export const error$: WritableAtom<undefined> = atom(undefined);
//!     [Storage]
export const tasker = async ( storageKey : WritableAtom, value : any ) => {
    task(async () => {
        console.log(`[TASK] : Setting ${value}`)
        storageKey.set(value)
    })
}
export const VE = async ( props ) => {
    task( async () => {
        {props.children}
    })
}