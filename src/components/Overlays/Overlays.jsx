import React, { useEffect, useLayoutEffect } from 'react'

export default function Overlays(...props) {

  useLayoutEffect(() => {
    console.log(props.scroll);
  
    return () => {
      props.scroll
    };
  }, [props.scroll])

  return (
    <>
      <div className='overlays'>
        <a className='arrow'>scroll</a>
      </div>
    </>
  )
}