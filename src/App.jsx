import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, Html} from '@react-three/drei'
import './App.css'

import Experience from './Experience'

const Loading = <Html><div>LOADING...</div></Html>;

function App() {

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45,near: 0.01,far: 300,position: [0, 1, 6]}}>
        <Suspense fallback={Loading}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  )
  
}

export default App
