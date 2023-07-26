//?     [Appwrite]
//*     [IMPORT]
import {
  Account,
  AppwriteException,
  Client,
  Functions,
  Databases,
  Storage,
  ID,
  Models,
} from 'appwrite'
import { atom, WritableAtom, task } from 'nanostores'
import * as ClientStorage from './Storage'

//*     [KBVE API]
export const appwriteClient = new Client()
  .setEndpoint('https://ap.kbve.com/v1')
  .setProject('6436a6dc9a6b48db802f')

export const appwriteAccount = new Account(appwriteClient)
export const isLoggedIn: WritableAtom<undefined | Models.Session> = atom(undefined)

//*     [Session]
appwriteAccount.getSession('current').then(
  function (response) {
    isLoggedIn.set(response)
  },
  function (error) {
    isLoggedIn.set(undefined)
  }
)

// @ts-ignore
export const user$: WritableAtom<undefined | Models.Account<Models.Preferences>> = atom(undefined)

export const function$: WritableAtom<undefined | Models.Execution> = atom(undefined)

export const api$: WritableAtom<Boolean> = atom(false)

export const error$: WritableAtom<undefined> = atom(undefined)

export const data$: WritableAtom<undefined> = atom(undefined)

export const cs = ClientStorage;

isLoggedIn.subscribe(async (session) => {
  if (session?.userId) {
    user$.set(await account())
  }
})

export const JWT = async () => {
  try {
    return appwriteAccount.createJWT()
  } catch (error) {
    return error
  }
}

export const login = async (email: string, password: string) => {
  try {
    const session = await appwriteAccount.createEmailSession(email, password)
    isLoggedIn.set(session)
  } catch (error) {
    const appwriteError = error as AppwriteException
    throw appwriteError.message
  }
}



export const logout = async () => {
  try {
    const session = isLoggedIn.get()
    console.log(session)
    if (session?.$id) {
      await appwriteAccount.deleteSession(session?.$id)
      isLoggedIn.set(undefined)
      //window.location.href = "/account/login";
    }
  } catch (error) {
    const appwriteError = error as AppwriteException
    throw appwriteError.message
  }
}

export const create = async (email: string, password: string, name: string) => {
  try {
    await appwriteAccount.create(ID.unique(), email, password, name)
    const session = await appwriteAccount.createEmailSession(email, password)
    isLoggedIn.set(session)
    //window.location.href = "/account/profile";
  } catch (error) {
    const appwriteError = error as AppwriteException
    throw appwriteError.message
  }
}

export const account = async () => {
  try {
    return appwriteAccount.get()
  } catch (error) {
    const appwriteError = error as AppwriteException
    throw appwriteError.message
  }
}

//* [VOID]

export const bug = async() => {
	return cs.debug$.get();
}

export const v0id = async () => {
	task( async () => {
		const v = cs.void$.get();
		switch (String(v)) {
			case 'login':
				minion();
			default:
				return;
		}
	})
}



//* [MINION]

export const minion = async () => {
	task ( async () => {
		const m = cs.minion$.get();
		switch (String(m)) {
			case 'login':
				minionLogin(cs.email$, cs.password$, cs.status$, cs.error$);
			default:
				return
		}
	})
}

export const minionLogin = async (
	email: WritableAtom,
	password: WritableAtom,
	status: WritableAtom,
	error: WritableAtom
  ) => {
	task(async () => {
	  console.log(`[TASK] -> ${email.get()} : ${password.get()} : ${status.get()} : ${error.get()}`)
	  //TODO Logic + Validation ?!? before sending it over to the main API
	  login(email.get(), password.get())
		.then(() => (''))
		.catch((e) => ClientStorage.tasker(error, e))
		.finally(() =>setTimeout(() => (ClientStorage.tasker(status, undefined))))
	})
  }