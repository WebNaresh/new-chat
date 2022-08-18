import React, { useContext } from 'react'
import user from '../../../assets/user-login-icon-vector-21078913.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons'
import './ConactCard.css'
import ChatContext from '../../../state/Chat/ChatContex'

const ContactCard = ({
  name,
  userImage,
  msgCondition,
  lastMessage,
  lastMessageTime
}) => {
  const { changeData } = useContext(ChatContext)

  return (
    <div>
      <div
        style={{ cursor: lastMessage ? 'pointer' : 'default' }}
        className='contactCard'
        onClick={e => changeData(name, e)}
      >
        <div className='image'>
          <img
            src={userImage === undefined || '' ? user : userImage}
            className={'userImage'}
            alt='user'
          />
        </div>
        <div className='inSameDiv'>
          <div className='name'>{name}</div>
          <div className='lastMessage'>
            <div className='msgCondition'>
              <>
                {msgCondition === 'onway' ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : msgCondition === 'seen' ? (
                  <>
                    <FontAwesomeIcon color='skyblue' icon={faCheck} />
                    <FontAwesomeIcon color='skyblue' icon={faCheck} />
                  </>
                ) : (
                  <FontAwesomeIcon color='red' icon={faExclamation} />
                )}
              </>
            </div>
            <>
              {msgCondition === 'onway' ? (
                { lastMessage }
              ) : msgCondition === 'seen' ? (
                <>{lastMessage}</>
              ) : (
                <p className='unvisible'>MSG not Sent</p>
              )}
            </>
          </div>
        </div>
        <div className='time'>{lastMessageTime}</div>
      </div>
    </div>
  )
}

export default ContactCard
