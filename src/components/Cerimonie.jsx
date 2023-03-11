import * as THREE from 'three'
import {useEffect, useLayoutEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function Cerimonie(props) {

  const scroll = useScroll()

  const {scene, animations} = useGLTF('/cerimonie-transformed.glb')
  const {actions} = useAnimations(animations, scene)

  // useEffect(() => void (actions['cerimonie'].play().paused = true), [actions])

  // useFrame((state, delta) => {
  //   const action = actions['cerimonie']
  //   action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * scroll.offset * props.multiplier, 5, delta)
  // })

  return <primitive object={scene} props />
}

useGLTF.preload('/cerimonie-transformed.glb')
