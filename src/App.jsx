import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment} from '@react-three/drei'
import './App.css'

function App() {

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        cacamera={{
          fov: 45,
          near: 0.01,
          far: 300,
          position: [0, 1, 6]
      }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {/* <Model scroll={scroll} /> */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </>
  )
  
}

export default App
