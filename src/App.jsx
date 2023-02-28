import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, Scroll, ScrollControls, Stats, Environment} from '@react-three/drei'
import {Meeting} from "./Meeting";
import {Overlay} from "./Overlay";

const Loading = <Html><div>... LOADING...</div></Html>;

export default function App() {

  return (
    <>
      <Canvas shadows dpr={[1, 2]} gl={{alpha: true, antialias: false}} camera={{fov: 100, position: [0, 0, 0]}}>
        <ambientLight intensity={0.3} />
        <fog attach="fog" args={['white', 0.0001, 100]} />
        <Stats />
        <Suspense fallback={Loading}>
          <ScrollControls pages={7} damping={0.2}>

            <Meeting />

            <Scroll html page={7}>
              <Overlay />
            </Scroll>

          </ScrollControls>
          <Environment preset="city" blur={0} background={false} />
        </Suspense>

      </Canvas>
    </>
  )
}

