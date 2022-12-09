import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal, useGlobalStates } from './utils/global.context'



const Navbar = () => {



  const { state, dispatch } = useGlobalStates()

  return (
    <nav>

      <Link to='/'><h3>Home</h3></Link>
      <Link to='/Contact'><h3>Contact</h3></Link>
      <Link to='/Favs'><h3>Favs</h3></Link>
      {state.theme === 'light' ?
        <button onClick={() => dispatch({ type: 'SWITCH_DARK', payload: 'dark' })}> 🌛 </button>
        :
        <button onClick={() => dispatch({ type: 'SWITCH_LIGHT', payload: 'light' })}> ☀️ </button>
      }
    </nav>
  )
}

export default Navbar