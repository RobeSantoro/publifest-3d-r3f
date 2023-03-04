import {Suspense, useRef, useEffect, useLayoutEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, Stats, Scroll, useScroll, ScrollControls, Environment, MeshReflectorMaterial} from '@react-three/drei'
import {Perf} from 'r3f-perf'

import Camera from "./Camera";
import Meeting from "./Meeting";

import Texts from "./Texts";

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  return (
    <Canvas shadows dpr={[1, 2]} gl={{alpha: true, antialias: false}} camera={{fov: 100, position: [0, 0, -50]}}>

      <ambientLight intensity={0.3} />
      <fog attach="fog" args={['white', 0.0001, 100]} />

      <Suspense fallback={Loading}>

        <ScrollControls pages={7} damping={0}>
          <Texts />
          <Camera />
          <Meeting />
        </ScrollControls>
        <Environment preset="city" blur={0} background={false} />

      </Suspense>

      {/* <Stats /> */}
      {/* <Perf /> */}
    </Canvas>
  )
}

