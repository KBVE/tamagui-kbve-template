//?     [Storage]
//!     This library does not call the API! Use <appwrite.ts> to call directly from the API.

//*     [IMPORT]
import { atom, WritableAtom, task } from "nanostores";

//*     [DATA]

//?     [X]
export const misc$: WritableAtom<undefined> = atom(undefined);
export const flow$: WritableAtom<undefined> = atom(undefined);
export const status$: WritableAtom<undefined> = atom(undefined);
export const error$: WritableAtom<undefined> = atom(undefined);
export const temp$: WritableAtom<undefined> = atom(undefined);


//?     [?User]
export const email$: WritableAtom<undefined> = atom(undefined);
export const password$: WritableAtom<undefined> = atom(undefined);
export const user$: WritableAtom<undefined> = atom(undefined);


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