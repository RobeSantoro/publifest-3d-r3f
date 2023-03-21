import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html, Stats, useProgress} from '@react-three/drei'
import {Perf} from 'r3f-perf'

import World from './components/World'

function Loading() {

  const {active, progress, errors, item, loaded, total} = useProgress()

  return <Html
    center
    prepend
    as='div'
    style={{
      color: '#002753',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: 'bold'
    }}
  >
    {progress.toFixed(0)}%
  </Html>
}

export default function App() {

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      gl={{alpha: true, antialias: true, preserveDrawingBuffer: true}}
      camera={{fov: 100, position: [1000, 1000, 1000], near: 1, far: 150}}>

      <ambientLight intensity={0.3} />

      <Suspense fallback={<Loading />}>
        <World />
      </Suspense>

      <Perf position="bottom-right" />
      {/* <Stats /> */}

    </Canvas>
  )
}

