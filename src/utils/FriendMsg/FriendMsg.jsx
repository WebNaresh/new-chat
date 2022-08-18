import React from 'react'

const FriendMsg = ({ time, msg }) => {
  return (
    <div className='msg'>
      <div className='bubble'>
        <div className='txt'>
          {/* <span className='name'>
            +353 87 1234 567<span> ~ John</span>
          </span> */}
          <span className='timestamp'>{time}</span>
          <p className='message'>{msg}</p>
        </div>
        <div className='bubble-arrow'></div>
      </div>
    </div>
  )
}

export default FriendMsg
