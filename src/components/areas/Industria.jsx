import {useEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function industria(props) {

    const scrollData = useScroll()

    const {scene, animations, nodes} = useGLTF('/industria-transformed.glb', false)
    const {actions} = useAnimations(animations, scene)

    // useEffect(() => void (actions['industria'].play().paused = true), [actions])

    useFrame((state, delta) => {
        // const action = actions['industria']
        // action.time = scrollData.offset * props.multiplier
    })

    return <primitive object={scene} props />
}

useGLTF.preload('/industria-transformed.glb')
