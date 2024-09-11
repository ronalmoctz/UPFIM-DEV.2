import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto flex max-w-6xl flex-col gap-10 overflow-hidden'>{children}</div>
  )
}

export default Container
