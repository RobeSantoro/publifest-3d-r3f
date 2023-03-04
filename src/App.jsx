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
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[200, 200]} />
        <MeshReflectorMaterial
          blur={[2000, 2000]}
          resolution={2048}
          mixBlur={10}
          mixStrength={1}
          roughness={0.9}
          depthScale={0}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#cccccc"
          metalness={0.1}
        />
      </mesh>

      {/* <Stats /> */}
      {/* <Perf /> */}
    </Canvas>
  )
}

