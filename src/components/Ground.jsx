import {MeshReflectorMaterial} from '@react-three/drei'

export default function Ground(props) {

  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <MeshReflectorMaterial
        resolution={2048}
        mixBlur={10}
        mixStrength={3}
        blur={[2000, 2000]}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        depthScale={0.5}
        depthToBlurRatioBias={0.1}
        attach={'material'}
        color="#cccccc"
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  )
}

{/*          
  <MeshReflectorMaterial
    resolution={2048}
    mixBlur={10}
    mixStrength={3} 
    blur={[2000, 2000]}
    minDepthThreshold={0.4}
    maxDepthThreshold={1.4}
    depthScale={0}
    depthToBlurRatioBias={0.1}
    attach={'material'}
    color="#ffffff"
    roughness={0.4}
    metalness={0.1}
          />*/}