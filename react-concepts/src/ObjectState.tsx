import { useState } from "react"

function StatefulObject(){

    const [state,setState] = useState({
        count : 0,
        user : 'Bob'
    })

    const handleClick = () => {
        setState({
           ...state, // in order to nopt overwrite state object
           count: state.count + 1, 
        })
    }

    return(
        <>
                  <h3>Count: {state.count}</h3>
      <h3>User: {state.user}</h3>
      <button onClick={handleClick}>Increment</button>

        </>
    )
}

export default StatefulObject