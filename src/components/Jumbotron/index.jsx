import React, { useContext } from 'react'
import { AuthContext } from '../../App'

export default function Jumbotron() {
    const {state } = useContext(AuthContext)
    
  return (
    <div className='container'>
      {state.isAuth ? (
        <h2>Hello, {state.user.full_name}</h2>
        ) : (
        <h2>Hello, Stranger...</h2>
      )}
    </div>
  )
}