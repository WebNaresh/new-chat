import React, { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import './join.css'
import login from '../../assets/TransfyBlack.png'
import GoogleLoginContext from '../../state/Google/GoogleContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faEyeSlash,
  faUser
} from '@fortawesome/free-solid-svg-icons'

const Join = () => {
  const {
    handleLogin,
    handleFailure,
    hello,
    fishEye,
    handleForm,
    LoginSignupUseState,
    switchForms,
    goggleUser
  } = useContext(GoogleLoginContext)
  console.log(goggleUser)

  return (
    <>
      <section id='section1'>
        {goggleUser.name.length === 0 ? (
          <div className='form' onSubmit={handleForm}>
            <div className={'transfyLogo'}>
              <img id='img' src={login} alt={'login'} />
            </div>
            {goggleUser.name.length < 1 ? (
              <div className='number'>
                <div className='formth'>
                  {goggleUser.name === '' ? (
                    <div className='googleLogin'>
                      <GoogleLogin
                        size='large'
                        // type='icon'
                        shape='square'
                        width='400'
                        theme='filled'
                        auto_select='true
                  '
                        onSuccess={handleLogin}
                        useOneTap={true}
                        onError={handleFailure}
                        logo_alignment={'left'}
                        context={'signin'}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  <div>
                    <hr />
                    <h5>OR</h5>
                  </div>

                  <div id='swipe'>
                    {LoginSignupUseState === true ? (
                      <form id='form1' action=''>
                        <div>
                          <input type='text' name='name' placeholder='name' />
                          <FontAwesomeIcon className='svg' icon={faUser} />
                        </div>
                        <div>
                          <input
                            type='email'
                            name='email'
                            placeholder='Email'
                          />
                          <FontAwesomeIcon className='svg' icon={faEnvelope} />
                        </div>
                        <div>
                          <input
                            type={fishEye === faEyeSlash ? 'password' : 'text'}
                            name='Password'
                            placeholder='Password'
                          />
                          <FontAwesomeIcon
                            className='svg'
                            onClick={hello}
                            icon={fishEye}
                          />
                        </div>
                        <button
                          className='button'
                          type='submit'
                          disabled={false}
                        >
                          Sign up
                        </button>
                      </form>
                    ) : (
                      <form id='form2' action=''>
                        <div>
                          <input
                            type='email'
                            name='email'
                            placeholder='Email'
                          />
                          <FontAwesomeIcon className='svg' icon={faEnvelope} />
                        </div>
                        <div>
                          <input
                            type={fishEye === faEyeSlash ? 'password' : 'text'}
                            name='Password'
                            placeholder='Password'
                          />
                          <FontAwesomeIcon
                            className='svg'
                            onClick={hello}
                            icon={fishEye}
                          />
                        </div>
                        <button
                          className='button'
                          type='submit'
                          disabled={false}
                        >
                          Log In
                        </button>
                      </form>
                    )}
                  </div>
                  <p className='Link1' onClick={switchForms}>
                    {LoginSignupUseState === true
                      ? 'Already have an account 😉 ?! Sign up'
                      : 'Do Not Have Account 😉 ! Log In '}
                  </p>
                </div>
              </div>
            ) : (
              ''
            )}

            {goggleUser.name.length > 1 ? console.log(goggleUser) : ''}
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  )
}

export default Join
