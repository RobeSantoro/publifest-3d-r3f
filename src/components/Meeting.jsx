import {useEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function Meeting(props) {

    const scrollData = useScroll()

    const {scene, animations, nodes} = useGLTF('/meeting-transformed.glb', false)
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['meeting'].play().paused = true), [actions])

    useFrame(() => {
        const action = actions['meeting']
        action.time = scrollData.offset * props.multiplier
    })

    return <primitive object={scene} props />
}

useGLTF.preload('/meeting-transformed.glb')
