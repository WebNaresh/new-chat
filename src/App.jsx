import GoogleState from './state/Google/GoogleState'
import LoaderState from './state/Loader/LoaderState'
import { GoogleOAuthProvider } from '@react-oauth/google'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.min.css'
import NewApp from './NewApp'
import { BrowserRouter } from 'react-router-dom'
import ChatState from './state/Chat/ChatState'

const App = () => {
  return (
    <GoogleOAuthProvider clientId='736936910086-ofv78076dj70fplvt4gfk19mubvj5887.apps.googleusercontent.com'>
      <BrowserRouter>
        <ChatState>
          <LoaderState>
            <GoogleState>
              <NewApp />
            </GoogleState>
          </LoaderState>
        </ChatState>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
