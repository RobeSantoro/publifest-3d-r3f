import { lazy, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Loading from './components/Loading'

const World = lazy(() => import('./components/World'))

export default function App() {

  return (
    <>
      <Canvas
        eventPrefix="offset" 
        frameloop='always'
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        camera={{ fov: 100, position: [0, 0, 10], near: 1, far: 1000 }}>
        <ambientLight intensity={0.3} />
        <Suspense fallback={<Loading />}>
          <World />
        </Suspense>
        <Perf position="bottom-right" />
      </Canvas>
    </>
  )
}

