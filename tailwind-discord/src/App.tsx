import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SideBar from './SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <SideBar />
    </div>
  )
}

export default App
