import React, {useState} from 'react'



export function Ejemplo3() {
const estadoIncial = {
  token: '12345',
  session: 1
}

const [sessionData, setSessionData] = useState(estadoIncial)


const UpdateSession = ()=> {
  setSessionData({
    token: "TOKEN ACTUALIZADO"  ,
    session: sessionData.session + 1
  })
}
  return (
    <div>
    <p>TOKEN: { sessionData.token} </p>
    <p>SESSION: { sessionData.session}</p> 
    <button onClick={UpdateSession}> CAMBIAR TOKEN Y SESSION</button>
    </div>
  )
}
