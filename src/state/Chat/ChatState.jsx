import React, { useState } from 'react'
import ChatContext from './ChatContex'
export const ChatState = props => {
  const [userData, setUserData] = useState({
    name: 'Prajkta'
  })
  const changeData = (name, e) => {
    console.log(name)
    console.log(e)
  }
  return (
    <ChatContext.Provider value={{ userData, setUserData, changeData }}>
      {props.children}
    </ChatContext.Provider>
  )
}
export default ChatState
