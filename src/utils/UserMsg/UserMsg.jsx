import React from 'react'

const UserMsg = ({ time, msg }) => {
  return (
    <div className='msg'>
      <div className='bubble altfollow'>
        <div className='txt'>
          <span className='timestamp'>{time}</span>
          <p className='message follow'>{msg}</p>
        </div>
        <div className='bubble-arrow alt'></div>
      </div>
    </div>
  )
}

export default UserMsg
