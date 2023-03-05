import {useEffect, useLayoutEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function Camera(props) {

    const scroll = useScroll()
    
    const {scene, nodes, animations} = useGLTF('models/camera-transformed.glb')
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['camera'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const camera_null = nodes['Camera'].position
        const camera_aim_null = nodes['Camera_Aim'].position
        state.camera.lookAt(...camera_aim_null)
        state.camera.position.set(...camera_null)

        actions['camera'].time = scroll.offset * props.multiplier
    })

    return <primitive object={scene} props />
}

useGLTF.preload('models/camera-transformed.glb')
