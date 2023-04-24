import {useEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function sagre(props) {

    const scrollData = useScroll()

    const {scene, animations, nodes} = useGLTF('/sagre-transformed.glb', false)
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['sagre'].play().paused = true), [actions])
    useEffect(() => void (actions['Baloon'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const action = actions['sagre']
        action.time = scrollData.offset * props.multiplier

        const carosello = nodes['carosello']
        carosello.rotation.y = carosello.rotation.y + 0.01

        if (scrollData.offset > 0.25) {
            actions['Baloon'].play().paused = false
        }
    })

    return <primitive object={scene} props />
}

useGLTF.preload('/sagre-transformed.glb')
