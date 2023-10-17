import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
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

        const resp = await registerUserWithEmailPassword({email, password, displayName})

        console.log(resp)
    }
}