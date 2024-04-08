import React from 'react'

function HomePage(props) {
  return (
    <div className='box-msg'>
        <h2>Welcome, {props.userName}</h2>

    </div>
  )
}

export default HomePage