import { useState } from 'react'
import './App.css'
import Input from './Input'

function App() {

  return (
    <>
      
       
      <div className="card">
        <h1>List</h1>
       <Input names={['karthick', 'ram']}/>
      </div>
      
    </>
  )
}

export default App
