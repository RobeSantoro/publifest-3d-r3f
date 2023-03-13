import * as THREE from 'three'
import {useEffect, useLayoutEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function Meeting(props) {

    const scrollData = useScroll()

    const {scene, animations, nodes} = useGLTF('/meeting-transformed.glb')
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['meeting'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const action = actions['meeting']
        // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * scroll.offset * props.multiplier, 5, delta)
        action.time = scrollData.offset * props.multiplier
    })

    return <primitive object={scene} props />
}

useGLTF.preload('/meeting-transformed.glb')
