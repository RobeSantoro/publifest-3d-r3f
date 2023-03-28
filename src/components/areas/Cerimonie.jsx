import * as THREE from 'three'
import {useEffect, useLayoutEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function Cerimonie(props) {

  const scrollData = useScroll()

  const {scene, animations} = useGLTF('/cerimonie-transformed.glb', false)
  const {actions} = useAnimations(animations, scene)

  useEffect(() => void (actions['cerimonie'].play().paused = true), [actions])

  useFrame(() => {
    const action = actions['cerimonie']
    action.time = scrollData.offset * props.multiplier
  })

  return <primitive object={scene} props />
}

useGLTF.preload('/cerimonie-transformed.glb')
