import {useRef, useEffect, useLayoutEffect} from 'react'
import {useFrame} from '@react-three/fiber';
import {ScrollControls, Environment} from '@react-three/drei'

import Camera from "./Camera";
import Meeting from "./Meeting";
import Cerimonie from "./Cerimonie";
import Sagre from "./Sagre";
import Ground from "./Ground";

import Texts from "./Texts/Texts";

export default function World() {

  const globalScrollMultiplier = 6

  return (
    <>
      <ScrollControls pages={3} damping={0.5}>
        <Texts style={{zIndex: 100}} />
        <Camera multiplier={globalScrollMultiplier} />
        <Meeting multiplier={globalScrollMultiplier} />
        <Cerimonie multiplier={globalScrollMultiplier} />
        <Sagre multiplier={globalScrollMultiplier} />
        <Ground
          position={[-50, -0.1, -50]}
          scale={[500, 500, 500]}
          multiplier={globalScrollMultiplier} />
      </ScrollControls>
      <Environment preset="city" blur={0} background={false} />
    </>
  )
}

