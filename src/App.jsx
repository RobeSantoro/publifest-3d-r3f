import './App.css'

import {Suspense, useEffect, useLayoutEffect} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Html, ScrollControls, Sky, useScroll, useGLTF, useAnimations} from '@react-three/drei'

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{fov: 45, near: 0.01, far: 300, position: [0, 1, 6]}}>
        <ambientLight intensity={0.5} />
        {/* <OrbitControls dampingFactor={0.05} makeDefault target={[0, 1, 0]} /> */}
        <directionalLight position={[1, 2, 3]} intensity={1.5} />

        <Suspense fallback={Loading}>
          <ScrollControls pages={3}>
            <Congressi/>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  )

}

export function Congressi({...props}) {

  const scroll = useScroll()
  const { scene, nodes, materials, animations } = useGLTF('/models/congressi-transformed.glb')

  const { actions } = useAnimations(animations, scene)

  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  useEffect(() => void (actions['CameraAction'].play().paused = true), [actions])
  useFrame((state, delta) => {
    const action = actions['CameraAction']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    state.camera.lookAt(0, 0, 0)
  })

  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/congressi-transformed.glb')
