import {lazy, Suspense} from 'react'
import {ScrollControls, Environment} from '@react-three/drei'

import Ground from "./Ground";
import Camera from "./Camera";
import Meeting from "./Meeting";
const Cerimonie = lazy(() => import("./Cerimonie"));
const Sagre = lazy(() => import("./Sagre"));

import Texts from "./Texts/Texts";
import Overlays from './Overlays';

export default function World() {

  const globalScrollMultiplier = 6

  return (
    <>
      <ScrollControls pages={3} damping={0.5}>
        <Camera multiplier={globalScrollMultiplier} />
        <Meeting multiplier={globalScrollMultiplier} />
        <Suspense fallback={null}>
          <Cerimonie multiplier={globalScrollMultiplier} />
          <Sagre multiplier={globalScrollMultiplier} />
        </Suspense>
        <Ground
          position={[-50, -0.025, -50]}
          scale={[500, 500, 500]}
          multiplier={globalScrollMultiplier} />
        <Texts />
        {/* <Overlays /> */}
      </ScrollControls>
      <fog attach="fog" args={['white', 0.0001, 70]} />
      <Environment preset="city" blur={1} background={false} />
    </>
  )
}

