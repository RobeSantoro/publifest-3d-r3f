import {useGLTF} from '@react-three/drei'

export default function Logo() {

    const {scene} = useGLTF('/logo-transformed.glb', false)
    return <primitive object={scene} />
}

useGLTF.preload('/logo-transformed.glb')
