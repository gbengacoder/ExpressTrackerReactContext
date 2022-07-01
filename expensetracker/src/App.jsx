import { useState } from 'react'

import './App.css'
import Balance from './components/Balance'
import { GlobalProvider } from './components/contexts/GlobalState'
import InputForm from './components/InputForm'
import Movements from './components/Movements'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <GlobalProvider>

     <Balance/>
     <Movements/>
     <InputForm/>
     </GlobalProvider>

         </div>
  )
}

export default App
