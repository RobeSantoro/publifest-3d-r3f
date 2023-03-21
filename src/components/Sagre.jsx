import * as THREE from 'three'
import {useEffect, useLayoutEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function sagre(props) {

    const scrollData = useScroll()

    const {scene, animations, nodes} = useGLTF('/sagre-transformed.glb')
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['sagre'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const action = actions['sagre']
        // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * scroll.offset * props.multiplier, 5, delta)
        action.time = scrollData.offset * props.multiplier

        const carosello = nodes['Carosello']        // Animate the rotation Y of the Carosello over time
        carosello.rotation.y = carosello.rotation.y + delta
    })

    return <primitive object={scene} props />
}

useGLTF.preload('/sagre-transformed.glb')
