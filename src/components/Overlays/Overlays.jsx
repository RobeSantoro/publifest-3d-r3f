import React from 'react'

export default function Overlays() {

  const handleClick = () => {
    // window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    document.body.scrollTop = 2000;
    console.log(document.body.scrollTop);
  }

  return (
    <>
      <div className='overlays'>
        <a className='arrow' onClick={handleClick}>scroll</a>
      </div>
    </>
  )
}