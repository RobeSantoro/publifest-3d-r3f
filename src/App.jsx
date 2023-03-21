import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, Stats} from '@react-three/drei'
import {Perf} from 'r3f-perf'

import World from './components/World'

const Loading = <Html style={{
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

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      gl={{alpha: true, antialias: true, preserveDrawingBuffer: true}}
      camera={{fov: 100, position: [0, 0, 0], near: 1, far: 150}}>

      <ambientLight intensity={0.3} />

      <Suspense fallback={Loading}>
        <World />
      </Suspense>

      <Perf position="bottom-right" />
      {/* <Stats /> */}

    </Canvas>
  )
}

