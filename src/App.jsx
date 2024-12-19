import { useState } from 'react'
import data from './data.json'
import './App.css'
import Card from './Components/Cards/Card';

function App() {
  return (
    <div className="card-container">
      <Card props={data}/>
    </div>
  )
}

export default App
