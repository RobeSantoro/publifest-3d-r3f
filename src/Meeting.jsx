import * as THREE from 'three'
import {useEffect, useLayoutEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations, MeshReflectorMaterial} from '@react-three/drei'

export default function Meeting({...props}) {

    const {scroll} = useScroll()

    const {scene, animations, nodes} = useGLTF('models/meeting-transformed.glb')
    const {actions} = useAnimations(animations, scene)
    const GroundDisk = useRef()

    useLayoutEffect(() => {
        nodes['GroundDisk'].visible = false
        console.log(nodes['GroundDisk']);
    }, [])

    useEffect(() => void (actions['meeting'].play().paused = true), [actions])

    useFrame((state, delta) => {
        const offset = scroll.current * 10
        const action = actions['meeting']
        action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 8, delta)
    })

    return (
        <>
            <primitive object={scene} {...props} />
            <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[200, 200]} />
                <MeshReflectorMaterial
                    blur={[2000, 2000]}
                    resolution={2048}
                    mixBlur={10}
                    mixStrength={1}
                    roughness={0.9}
                    depthScale={0}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#cccccc"
                    metalness={0.1}
                />
            </mesh>

        </>
    )
}

useGLTF.preload('models/meeting-transformed.glb')
