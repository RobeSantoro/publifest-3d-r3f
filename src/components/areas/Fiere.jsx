import {useEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function fiere(props) {

    const scrollData = useScroll()

    const {scene, animations, nodes} = useGLTF('/fiere-transformed.glb', false)
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['fiere'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const action = actions['fiere']
        action.time = scrollData.offset * props.multiplier
    })

    return <primitive object={scene} props />
}

useGLTF.preload('/fiere-transformed.glb')
