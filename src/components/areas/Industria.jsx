import React from 'react'

import {useEffect, useLayoutEffect} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations} from '@react-three/drei'

import * as THREE from 'three'

export default function industria(props) {

    const scrollData = useScroll()

    const {scene, animations, nodes} = useGLTF('/industria-transformed.glb', false)
    const {actions} = useAnimations(animations, scene)

    useEffect(() => void (actions['industria'].play().paused = true), [actions])
    useEffect(() => void (actions['forklift'].play().paused = true), [actions])

    useLayoutEffect(() => {
        scene.traverse((node) => {
            if (node.name.startsWith('Panel')) {
                node.material.side = THREE.DoubleSide
            }
        })
    }, [scene])

    useFrame((state, delta) => {
        const action = actions['industria']
        action.time = scrollData.offset * props.multiplier

        if (scrollData.offset > 0.62) {
            actions['forklift'].play().paused = false
        }

    })

    return <primitive object={scene} props />
}

useGLTF.preload('/industria-transformed.glb')
