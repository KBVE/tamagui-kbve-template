//?     [Storage]
//!     This library does not call the API! Use <appwrite.ts> to call directly from the API.

//*     [IMPORT]
import { atom, WritableAtom, task } from "nanostores";

//*     [DATA]

//?     [MISC]
export const misc$: WritableAtom<undefined> = atom(undefined);


//?     [?User]
export const email$: WritableAtom<undefined> = atom(undefined);
export const user$: WritableAtom<undefined> = atom(undefined);

//?     [Error]
export const error$: WritableAtom<undefined> = atom(undefined);

export const tasker = async ( storageKey : WritableAtom, value : any ) => {
    task(async () => {
        console.log(`Setting ${value}`)
        storageKey.set(value)
    })
}