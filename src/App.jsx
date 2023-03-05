import {Suspense, useRef, useEffect, useLayoutEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, Stats, Scroll, useScroll, ScrollControls, Environment, MeshReflectorMaterial} from '@react-three/drei'
import {Perf} from 'r3f-perf'

import Camera from "./Camera";
import Meeting from "./Meeting";
import Ground from "./Ground";

import Texts from "./Texts";

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  const scrollMultiplier = 6

  return (
    <Canvas shadows dpr={[1, 2]} gl={{alpha: true, antialias: true}} camera={{fov: 100, position: [0, 0, 0]}}>

      <ambientLight intensity={0.3} />
      <fog attach="fog" args={['white', 0.0001, 90]} />

      <Suspense fallback={Loading}>
        <ScrollControls pages={6} damping={0}>
          <Texts />
          <Camera multiplier={scrollMultiplier} />
          <Meeting multiplier={scrollMultiplier} />
          <Ground multiplier={scrollMultiplier} />
        </ScrollControls>
        <Environment preset="city" blur={0} background={false} />
      </Suspense>

      <Stats />
      <Perf />

    </Canvas>
  )
}

