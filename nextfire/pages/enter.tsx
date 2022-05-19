import {auth, googleAuthProvider} from '../lib/firebase'
import { useContext } from 'react'
import { UserContext } from '../lib/context'


export default function Enter(props){

    const {user,username} = useContext(UserContext)

    /*
        1. User signed out -> display <SignInButton>
        2. User signed in , no username -> <UsernameForm />
        3. User signed in , has username -> >SignOutButton />
    */
    return(
        <main>
            {user?
                !username? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }
        </main>
    )
}

//Sign In with google Button
function SignInButton() {
    const signInWithGoogle = async ()=>{
        await auth.signInWithPopup(googleAuthProvider)
    }


return <button className="btn-google" onClick={signInWithGoogle}>
    <img src={'/google.png'} /> Sign In with google
</button>

}

//sign out button
function SignOutButton() {
    return <button onClick={()=> auth.signOut()}>Sign Out</button>
}

function UsernameForm(){
    return null
}