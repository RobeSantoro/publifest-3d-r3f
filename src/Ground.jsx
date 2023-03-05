import {useEffect, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {useScroll, useGLTF, useAnimations, MeshReflectorMaterial} from '@react-three/drei'

export default function Ground(props) {

  const scroll = useScroll()

  const group = useRef()
  const {nodes, materials, animations} = useGLTF('models/ground-transformed.glb')
  const {actions} = useAnimations(animations, group)

  useEffect(() => void (actions['ground'].play().paused = true), [actions])

  useFrame((state, delta) => {
    actions['ground'].time = scroll.offset * props.multiplier
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="GroundDisk" castShadow receiveShadow geometry={nodes.GroundDisk.geometry} material={materials.ground_mat} position={[0, 0, 74.79]} scale={2} />
      </group>
    </group>
  )
}

useGLTF.preload('models/ground-transformed.glb')

{/*          
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
/> */}