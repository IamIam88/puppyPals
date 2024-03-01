import { useState } from 'react'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPup, setFeatPup] = useState()
  
  return (
    <>
    <h1>🐶Puppy Pals🐶</h1>
      {puppies.map(puppy =><p key = {puppy.id} onClick={() => setFeatPup(puppy)} className="options">{puppy.name}</p>)}
      {featPup ?
      <div className ="singlePuppyView">
        <h2>{featPup.name}</h2>
        <p>🦴</p>
          <ul>
            <li>Age: {featPup.age}</li>
            <li>Email: {featPup.email}</li>
          </ul>
      </div>
      :
      <p className="prompt">Please Select a puppy!</p>
    }
    </>
  )
}

export default App
