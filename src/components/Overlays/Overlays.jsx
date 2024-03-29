import React from 'react'
import { Html } from '@react-three/drei'
import { useScroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

import './Overlays.css'

export default function Overlays() {

  const scrollData = useScroll();
  const gl = useThree((state) => state.gl);

  const handleClick = () => {
    const scrollTop = scrollData.el.scrollTop
    scrollData.el.scrollTo({ top: scrollTop + window.innerHeight, behavior: 'smooth' })
  }

  return (

      <Html
        transform
        position={[0, 0, 1]}
        sprite
        portal={{ current: gl.domElement.parentElement }}
        occlude
      >
        <div className='overlays' onClick={handleClick}>
          <a className='arrow'>scroll</a>
        </div>
      </Html>

  )
}