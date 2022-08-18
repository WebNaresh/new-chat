import React from 'react'
import './Chat.css'
import user from '../../assets/user-login-icon-vector-21078913.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ContactCard from './ContactCard/ContactCard'
import ChatFrontend from './ChatFrontend/ChatFrontend'
const Chat = () => {
  return (
    <>
      <div id='ClassSection'>
        <div className='contacts'>
          <div className='navbar'>
            <div className='userImage'>
              <img src={user} className={'userImage'} alt='user' />
            </div>
          </div>
          <div className='serchbar'>
            <input type='text' className='textbox' placeholder='Search' />
            <FontAwesomeIcon color='white' icon={faSearch} />
          </div>
          <div id='scrollbarMode' className='contactbar'>
            <ContactCard
              name={'Pajkta Jadhav'}
              userImage={user}
              msgCondition={'seen'}
              lastMessage={'ky kartoys'}
              lastMessageTime={'11:45 am'}
            />
            <ContactCard
              name={'Pajkta Jadhav'}
              userImage={user}
              msgCondition={'seen'}
              lastMessage={'ky kartoys'}
              lastMessageTime={'11:45 am'}
            />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </div>
        </div>
        <div className='ChatZone'>
          <ChatFrontend />
        </div>
      </div>
    </>
  )
}

export default Chat
