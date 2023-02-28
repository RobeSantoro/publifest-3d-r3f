import {Suspense, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, Scroll, ScrollControls, Stats, Environment} from '@react-three/drei'
import {Meeting} from "./Meeting";
import {Texts} from "./Texts";
import Overlay from "./Overlay"

const Loading = <Html><div>... LOADING...</div></Html>;

export default function App() {

  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  return (
    <>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />

      <Canvas shadows dpr={[1, 2]} gl={{alpha: true, antialias: false}} camera={{fov: 100, position: [0, 0, 0]}}>

        <ambientLight intensity={0.3} />
        <fog attach="fog" args={['white', 0.0001, 100]} />
        {/* <Stats /> */}
        <Suspense fallback={Loading}>
          {/* <ScrollControls pages={7} damping={0.2}> */}
          <Meeting scroll={scroll} />
          {/* <Scroll html id="scroll" pages={7}>
              <Texts />
            </Scroll>
          </ScrollControls> */}
          <Environment preset="city" blur={0} background={false} />
        </Suspense>
      </Canvas>


    </>
  )
}

