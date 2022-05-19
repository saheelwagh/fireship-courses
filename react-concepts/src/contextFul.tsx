import { useContext, useState,createContext } from "react";
const [count] = useState(0);
const CountContext = createContext()
export function PropDrilling() {
    

    return(
        <CountContext.Provider value={count}>
            <Child />
        </CountContext.Provider>
    )    
}

function Child() {
    return <GrandChild />
}

function GrandChild() {
    const count = useContext(CountContext)
    return <div>{count}</div>
}