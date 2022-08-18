import React, { useContext } from 'react'
import Loader from './utils/Loader'
import LoaderContext from './state/Loader/LoaderContext'
import Chat from './component/Chat/Chat'
import Join from './component/Join/Join'
import Background from './utils/Background'
import { Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

const NewApp = () => {
  const { Load } = useContext(LoaderContext)

  return (
    <div>
      <Background />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      {Load === true ? <Loader /> : ''}

      <Routes>
        <Route exact path='/' element={<Chat />} />

        <Route exact path='/login' element={<Join />} />
      </Routes>
    </div>
  )
}

export default NewApp
