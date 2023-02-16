import * as THREE from 'three'

import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react'

import {Canvas, useFrame} from '@react-three/fiber'

import {
  Html,
  ScrollControls,
  useScroll,
  useGLTF,
  useAnimations,
  Stats,
  Grid,
  Stage,
  Environment,
  SoftShadows,
  AccumulativeShadows,
} from '@react-three/drei'

import {EffectComposer, Bloom, SSAO} from '@react-three/postprocessing'

import {BlendFunction} from "postprocessing";

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  return (
    <>
      <Canvas shadows dpr={[1, 2]} gl={{alpha: true, antialias: false}} camera={{ fov: 100 }}>

        <ambientLight intensity={0.3} />


        <fog attach="fog" args={['white', 0.0001, 100]} />


        <Suspense fallback={Loading}>

          <ScrollControls pages={10}>
            <Animation />
          </ScrollControls>

        </Suspense>

        {/* <EffectComposer>
          <SSAO
            blendFunction={BlendFunction.MULTIPLY} // Use NORMAL to see the effect
            samples={1024}
            radius={5}
            intensity={10}
          />
        </EffectComposer> */}

        <Environment preset="city" blur={0.8} background={false} />
        <Stats />
      </Canvas>
    </>
  )

}

export function Animation({...props}) {

  const scroll = useScroll()
  const {scene, nodes, materials, animations} = useGLTF('models/animation-transformed.glb')

  const {actions} = useAnimations(animations, scene)

  useEffect(() => Object.values(nodes).forEach((node) => {

    // console.log(node.name);

    node.receiveShadow = node.castShadow = true

    if (node.name === 'logo_tenso_geo_front') {
      node.material.side = THREE.FrontSide
    }

    if (node.name === 'logo_tenso_geo_back') {
      node.material.side = THREE.BackSide
    }
  }))

  // useEffect(() => {
  //   console.log(`Camera Position: ${ nodes['Camera'].position } `)
  //   console.log(`Camera Aim ${ ['Camera_Aim'].position }`)
  //   console.log(`Scroll Offset: ${ scroll.offset }`)
  //   console.log(`Materials ${ materials }`)
  // }, [scroll, nodes])

  useEffect(() => void (actions['animation'].play().paused = true), [actions])

  useFrame((state, delta) => {

    const action = actions['animation']

    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = scroll.offset * 10
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)

    const camera_null = nodes['Camera'].position
    const camera_aim_null = nodes['Camera_Aim'].position

    state.camera.lookAt(...camera_aim_null)
    state.camera.position.set(...camera_null)

    // console.log(scroll.offset)
  })

  return (
    <>
      <primitive object={scene} {...props} />
    </>
  )
}

useGLTF.preload('models/animation-transformed.glb')
