import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkinCredentials, login, logout } from "./"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkinCredentials())
    }
}


export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkinCredentials())

        const result = await signInWithGoogle()
        if(!result.ok) return dispatch(logout(result.errorMessage))


        dispatch(login(result))
    }
}


export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {

    console.log({email, password, displayName})
    return async(dispatch)=> {
        dispatch(checkinCredentials())

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName})

        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))

    }
}


export const startLoginWithEmailPassword = ({email, password}) => {
    
    return async(dispatch) => {
        dispatch(checkinCredentials())

        const {ok, uid, photoURL, errorMessage, displayName} = await loginWithEmailPassword({email, password})
        
        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))
        
    }

}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase()

        dispatch(logout({}))
    }
}