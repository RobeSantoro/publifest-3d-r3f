import * as THREE from 'three'
import {useEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function Camera({...props}) {

    const scroll = useScroll()
    
    const {scene, nodes, animations} = useGLTF('models/camera-transformed.glb')
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['camera'].play().paused = true), [actions])

    useFrame((state, delta) => {
        
        const offset = scroll.offset * 10
        
        const action = actions['camera']
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 8, delta)

        const camera_null = nodes['Camera'].position
        const camera_aim_null = nodes['Camera_Aim'].position
        state.camera.lookAt(...camera_aim_null)
        state.camera.position.set(...camera_null)
    })

    return <primitive object={scene} {...props} />
}

useGLTF.preload('models/camera-transformed.glb')
