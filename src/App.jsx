import './App.css'

import * as THREE from 'three'
import {Suspense, useEffect, useLayoutEffect} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Html, ScrollControls, Sky, useScroll, useGLTF, useAnimations} from '@react-three/drei'

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{fov: 120, near: 0.01, far: 300, position: [0, 1, 0]}} gl={{alpha: false, antialias: false}}>
        <ambientLight intensity={0.5} />
        <Sky sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        {/* <OrbitControls dampingFactor={0.05} makeDefault target={[0, 1, 0]} /> */}
        <directionalLight position={[1, 2, 3]} intensity={1.5} />

        <Suspense fallback={Loading}>
          <ScrollControls pages={10}>
            <Congressi />
          </ScrollControls>
        </Suspense>f
      </Canvas>
    </>
  )

}

export function Congressi({...props}) {

  const scroll = useScroll()
  const {scene, nodes, materials, animations} = useGLTF('models/animation-transformed.glb')

  const {actions} = useAnimations(animations, scene)

  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))

  useEffect(() => {
    console.log(`Camera Position: ${ nodes['Camera'].position } `)
    console.log(`Camera Aim ${ ['Camera_Aim'].position }`)
    console.log(`Scroll Offset: ${ scroll.offset }`)
  }, [scroll, nodes])

  useEffect(() => void (actions['Action.001'].play().paused = true), [actions])

  useFrame((state, delta) => {

    const action = actions['Action.001']

    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = scroll.offset * 10
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)

    const camera_null = nodes['Camera'].position
    const camera_aim_null = nodes['Camera_Aim'].position

    state.camera.lookAt(...camera_aim_null)
    state.camera.position.set(...camera_null)

    console.log(scroll.offset)
  })

  return <primitive object={scene} {...props} />
}

useGLTF.preload('models/animation-transformed.glb')
