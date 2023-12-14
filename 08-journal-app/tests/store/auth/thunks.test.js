import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers"
import { checkinCredentials, login, logout } from "../../../src/store/auth"
import { checkingAuthentication, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => { 
    const dispatch = jest.fn()

    beforeEach(() => jest.clearAllMocks())
    
    test('debe invocar el checkingCredentials', async() => { 
        
        await checkingAuthentication()( dispatch)
        expect(dispatch). toHaveBeenCalledWith(checkinCredentials())
     })

     test('startGoogleSignIn debe llamar checkingCredentials y login', async() => { 
        
        const loginData = {ok: true, ...demoUser}

        await signInWithGoogle.mockResolvedValue(loginData)

        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))

      })

      test('startGoogleSignIn debe llamar checkingCredentials y logout - Error', async() => { 
        
        const loginData = {ok: false, errorMessage: 'Un error en Google'}

        await signInWithGoogle.mockResolvedValue(loginData)

        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))


       })

       test('startLoginWithEmailPassword debe llamar checkingCredentials y login - Éxito', async() => { 
        
          const loginData = {ok: true, ...demoUser}
          const formData ={email: demoUser.email, password: '123456'}


          await loginWithEmailPassword.mockResolvedValue(loginData)

          await startLoginWithEmailPassword(formData)(dispatch)

          expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
          expect(dispatch).toHaveBeenCalledWith(login(loginData))


        })

       test('startLoginWithEmailPassword debe llamar checkingCredentials y login - Error', async() => { 
        
          const loginData = {ok: false, errorMessage: 'Error de autenticación'}
          const formData ={email: demoUser.email, password: '123456'}


          await loginWithEmailPassword.mockResolvedValue(loginData)

          await startLoginWithEmailPassword(formData)(dispatch)

          expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
          expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))


        })

        test('startCreatingUserWithEmailPassword debe llamar CheckingCredentials y login - Éxito', async() => {

          const loginData = {ok: true, ...demoUser}
          const formData ={email: demoUser.email, password: '123456'}

          await registerUserWithEmailPassword.mockResolvedValue(loginData)

          await startCreatingUserWithEmailPassword(formData)(dispatch)

          expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
          expect(dispatch).toHaveBeenCalledWith(login(loginData))
        })

        test('startCreatingUserWithEmailPassword debe llamar CheckingCredentials y login - Error', async() => {

          const loginData = {ok: false, errorMessage: 'Error de registro'}
          const formData ={email: demoUser.email, password: '123456'}

          await registerUserWithEmailPassword.mockResolvedValue(loginData)

          await startCreatingUserWithEmailPassword(formData)(dispatch)

          expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
          expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
        })


        test('startLogout debe llamar logoutFirebase, clearNotes y logout', async() => { 
          
          await startLogout()(dispatch)

          expect(logoutFirebase).toHaveBeenCalled()
          expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
          expect(dispatch).toHaveBeenCalledWith(logout())

         })
 })