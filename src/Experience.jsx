import './Experience.css'

import { useRef } from 'react'
import { MeshReflectorMaterial, OrbitControls } from '@react-three/drei'


import Congressi from './components/Congressi'


function Experience() {

	const scroll = useRef(0)

	return (
		<>

			<OrbitControls dampingFactor={0.05} makeDefault target={[0, 1, 0]} />
			<ambientLight intensity={0.5} />
			<directionalLight position={[1, 2, 3]} intensity={1.5} />

			<Congressi scroll={scroll} />

			{/* Floor
			<mesh position-y={0} scale={20} rotation={[-Math.PI * .5, 0, 0]}>
				<planeGeometry />
				{/* {<meshBasicMaterial color={ 'white' } />} 
				<MeshReflectorMaterial
					resolution={512}
					blur={[500, 500]}
					mixBlur={1}
					mirror={0.5}
					color='lightgray'
				/>
			</mesh>*/}

		</>
	)
}

export default Experience