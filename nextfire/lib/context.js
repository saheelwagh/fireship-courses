import {createContext} from 'react'

export const UserContext = createContext(
    {
        user : null,
        username : null
    }
) //exports these default values 
//look  up creatContext()