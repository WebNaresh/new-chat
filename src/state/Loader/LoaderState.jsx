import React, { useState } from 'react'
import LoaderContext from './LoaderContext'
export const LoaderState = props => {
  const [Load, setLoad] = useState(false)
  const state = { name: 'harry', class: '5b' }
  const state2 = { name: 'harry', class: '5b' }
  return (
    <LoaderContext.Provider value={{ state, state2, Load, setLoad }}>
      {props.children}
    </LoaderContext.Provider>
  )
}
export default LoaderState
