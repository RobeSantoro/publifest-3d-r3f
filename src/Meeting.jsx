import * as THREE from 'three'
import {useEffect, useLayoutEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

export function Meeting({...props}) {

    const {scene, nodes, materials, animations} = useGLTF('models/meeting-transformed.glb')
    const {scroll} = props
    // const scroll = useScroll()
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['meeting'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const action = actions['meeting']

        // const offset = scroll.offset * 10
        // console.log(scroll.current);
        const offset = scroll.current * 10
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 2, delta)

        const camera_null = nodes['Camera'].position
        const camera_aim_null = nodes['Camera_Aim'].position
        state.camera.lookAt(...camera_aim_null)
        state.camera.position.set(...camera_null)
    })

    return <primitive object={scene} /* {...props} */ />
}

useGLTF.preload('models/meeting-transformed.glb')
