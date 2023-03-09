import {Suspense, useRef, useEffect, useLayoutEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, ScrollControls, Environment, Stats} from '@react-three/drei'
import {Perf} from 'r3f-perf'

import Camera from "./Camera";
import Meeting from "./Meeting";
import Ground from "./Ground";

import Texts from "./Texts";

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  const globalScrollMultiplier = 6

  return (
    <Canvas shadows dpr={[1, 2]} gl={{alpha: true, antialias: true}} camera={{fov: 100, position: [0, 0, 0], near: 1, far: 150} }>

      <ambientLight intensity={0.3} />
      {/* <fog attach="fog" args={['white', 0.0001, 90]} /> */}

      <Suspense fallback={Loading}>
        <ScrollControls pages={6} damping={0.1}>
          <Texts style={{zIndex: 100}} />
          <Camera multiplier={globalScrollMultiplier} />
          <Meeting multiplier={globalScrollMultiplier} />
          <Ground multiplier={globalScrollMultiplier} />
        </ScrollControls>
        <Environment preset="city" blur={0} background={false} />
      </Suspense>

      {/* <Stats  /> */}
      {/* <Perf minimal position="bottom-right"/> */}

    </Canvas>
  )
}

