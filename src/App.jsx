import {Suspense, useRef, useEffect, useLayoutEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, ScrollControls, Environment, Stats} from '@react-three/drei'
import {Perf} from 'r3f-perf'

import Camera from "./components/Camera";
import Meeting from "./components/Meeting";
import Cerimonie from "./components/Cerimonie";
import Ground from "./components/Ground";

import Texts from "./components/Texts/Texts";

const Loading = <Html fullscreen style={{
  color: 'grey',
  padding: '1rem',
  borderRadius: '1rem',
  fontSize: '2rem',
  fontWeight: 'bold',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}}
>
  <div>Loading</div>
</Html>;

export default function App() {

  const globalScrollMultiplier = 6

  return (
    <Canvas shadows dpr={[1, 2]} gl={{alpha: true, antialias: true}} camera={{fov: 100, position: [0, 0, 0], near: 1, far: 150} }>

      <ambientLight intensity={0.3} />
      {/* <fog attach="fog" args={['white', 0.0001, 90]} /> */}

      <Suspense fallback={Loading}>
        <ScrollControls pages={6} damping={0.25}>
          <Texts style={{zIndex: 100}} />
          <Camera multiplier={globalScrollMultiplier} />
          <Meeting multiplier={globalScrollMultiplier} />
          <Cerimonie multiplier={globalScrollMultiplier} />
          <Ground scale={[200,200,200]} position={[0,-0.1,50]} multiplier={globalScrollMultiplier} />
        </ScrollControls>
        <Environment preset="city" blur={0} background={false} />
      </Suspense>

      <Stats  />
      <Perf minimal position="bottom-right"/>

    </Canvas>
  )
}

