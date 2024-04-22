import React, { useState } from 'react'
import Homepage from './component/Homepage'
import Gamepage from './component/Gamepage'
const App = () => {
  const [Isgamestarted, SetIsgamestarted]= useState(false)

  const Istoggel =()=>{
      SetIsgamestarted((prev) => !prev)
  }
  return (
    <div>
       { Isgamestarted?<Gamepage/> : <Homepage
         toggel={Istoggel}
       />}
    </div>
  )
}

export default App