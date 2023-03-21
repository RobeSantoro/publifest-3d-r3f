import * as THREE from 'three'
import {useEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function Camera(props) {

    const scrollData = useScroll()
    let fogFar = 70

    const {scene, nodes, animations} = useGLTF('/camera-transformed.glb')
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['camera'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const action = actions['camera']
        action.time = scrollData.offset * props.multiplier
        
        const camera_null = nodes['Camera_Pos'].position
        const camera_aim_null = nodes['Camera_Aim'].position
        state.camera.lookAt(...camera_aim_null)
        state.camera.position.set(...camera_null)
        state.camera.updateProjectionMatrix()

        fogFar = THREE.MathUtils.lerp(10, 90, scrollData.offset*100)
    })

    return (
        <>
            <primitive object={scene} props />
            <fog attach="fog" args={['white', 0.0001, fogFar]} />
        </>
    )
}

useGLTF.preload('/camera-transformed.glb')
