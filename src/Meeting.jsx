import * as THREE from 'three'
import {useEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export default function Meeting({...props}) {

    const {scroll} = useScroll()
    
    const {scene, animations} = useGLTF('models/meeting-transformed.glb')
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['meeting'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const offset = scroll.current * 10
        const action = actions['meeting']
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 8, delta)
    })

    return <primitive object={scene} {...props} />
}

useGLTF.preload('models/meeting-transformed.glb')
