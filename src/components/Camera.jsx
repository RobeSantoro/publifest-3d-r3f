import * as THREE from 'three'
import { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, useGLTF, useAnimations } from '@react-three/drei'

export default function Camera(props) {

    const scrollData = useScroll()
    
    const { scene, nodes, animations } = useGLTF('/camera-transformed.glb')
    const { actions } = useAnimations(animations, scene)
    
    useEffect(() => void (actions['camera'].time = 0), [actions])
    useFrame(({ mouse, camera }) => {

        // Get the camera nulls
        const camera_null = nodes['Camera_Pos'].position
        const camera_aim_null = nodes['Camera_Aim'].position

        camera.position.x = camera_null.x
        camera.position.y = camera_null.y
        camera.position.z = camera_null.z

        camera.lookAt(...camera_aim_null)

        const action = actions['camera']
        action.time = scrollData.offset * props.multiplier
    })

    useEffect(() => void (actions['camera'].play().paused = true), [actions])

    return <primitive object={scene} props />
}

useGLTF.preload('/camera-transformed.glb')
