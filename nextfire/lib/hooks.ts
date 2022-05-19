import {auth, firestore} from '../lib/firebase'
import { useEffect, useState } from 'react' //useEffect  ?
// import {useAuthState} from 'react-firebase-hooks/auth' //look up docs of react-firebase-hooks

// custom hook to read auth record and user profile document

export function useUserData() {
    const [user] = ['jeff' ]//useAuthState(auth)
    const [username, setUsername] = useState(null)

    useEffect(() => { 
        //turn off real time subsr -> look up realtime subscr concept
        let unsubscribe

        if(user){
            const ref = firestore.collection('users').doc(user.uid);
            unsubscribe = ref.onSnapshot((doc) => { 
                setUsername(doc.data()?.username) //()? -> lookup
             })
        } else {
            setUsername(null)
        }
        return unsubscribe
     }, [user])
    return {user,username}
}
 