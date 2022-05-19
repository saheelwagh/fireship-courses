import { useEffect, useState } from "react";

export default function Lifecycle(){
    const [count] = useState(0)

    useEffect(
        ()=>{
            console.log('count updated');
            return () => console.log('destroyed');
        }, [count] //data that needs to change to update the cycle
    )
}