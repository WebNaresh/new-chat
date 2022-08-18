import React, { useContext, useEffect, useState } from 'react'
import GoogleContext from './GoogleContext'
import jwt_decode from 'jwt-decode'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import LoaderContext from '../Loader/LoaderContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { toast } from 'react-toastify'
import { useCookies } from 'react-cookie'

export const GoogleState = props => {
  const redirect = useNavigate()
  const [setCookie] = useCookies(['cookie-name'])

  const { Load, setLoad } = useContext(LoaderContext)
  // const [user, setUser] = useState({
  //   username: '',
  //   useremail: '',
  //   userimage: '',
  //   userPassword: ''
  // })
  const [goggleUser, setGoggleUser] = useState({
    name: '',
    email: '',
    userImage: '',
    password: ''
  })
  const [fishEye, setFishEye] = useState(faEyeSlash)
  const [LoginSignupUseState, setLoginSignupUseState] = useState(true)

  const handleFailure = result => {}
  const handleLogin = async credentialResponse => {
    var { name, email, picture } = jwt_decode(credentialResponse.credential)
    console.log(name, email, picture)

    try {
      setGoggleUser({
        ...goggleUser,
        name,
        email,
        userImage: picture,
        password: email
      })
    } catch (errors) {
      console.log(errors)
    }
    console.log(goggleUser)

    setLoad(false)
  }

  const hello = () => {
    if (fishEye === faEyeSlash) {
      setFishEye(faEye)
    } else {
      setFishEye(faEyeSlash)
    }
  }
  const handleForm = e => {
    e.preventDefault()
  }
  const switchForms = () => {
    if (LoginSignupUseState === true) {
      setLoginSignupUseState(false)
    } else {
      setLoginSignupUseState(true)
    }
  }
  const errorToast = message => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      theme: 'dark',
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }
  useEffect(() => {
    if (goggleUser.name.length > 0) {
      setLoad(true)

      try {
        const config = { headers: { 'Content-Type': 'application/json' } }
        const response = axios
          .post(process.env.REACT_APP_BACKEND_STRING, goggleUser, config)
          .then(data => {
            console.log(data.data)
            // options for cookie
            const options = {
              expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
              httpOnly: true
            }
            setCookie('token', data.data.token, [options])
            setLoad(false)
          })
          .catch(errors => {
            console.log(errors.message)
            errorToast(errors.message)
            setGoggleUser({
              ...goggleUser,
              name: '',
              email: '',
              userImage: '',
              password: ''
            })

            setLoad(false)
          })

        console.log(response)
      } catch (errors) {
        console.log(errors)
        redirect('/login')
      }
    }
    // if (goggleUser.name.length > 0) {
    //   redirect('/')
    // }
  }, [setLoad, goggleUser, setCookie, redirect])
  return (
    <GoogleContext.Provider
      value={{
        handleFailure,
        handleLogin,
        // user,
        hello,
        fishEye,
        handleForm,
        goggleUser,
        setGoggleUser,
        LoginSignupUseState,
        setLoginSignupUseState,
        switchForms,
        Load
      }}
    >
      {props.children}
    </GoogleContext.Provider>
  )
}

export default GoogleState
