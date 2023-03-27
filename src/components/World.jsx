import {lazy, Suspense} from 'react'
import {ScrollControls, Environment} from '@react-three/drei'

import Ground from "./Ground";
import Camera from "./Camera";
import Meeting from "./areas/Meeting";
const Cerimonie = lazy(() => import("./areas/Cerimonie"));
const Sagre = lazy(() => import("./areas/Sagre"));
const Industria = lazy(() => import("./areas/Industria"));
const Fiere = lazy(() => import("./areas/Fiere"));

import Texts from "./Overlays/Texts";
import Overlays from './Overlays/Overlays';

export default function World() {

  const globalScrollMultiplier = 10;

  return (
    <>
      <ScrollControls pages={6} damping={0.5}>
        <Camera multiplier={globalScrollMultiplier} />
        <Meeting multiplier={globalScrollMultiplier} />
        <Suspense fallback={null}>
          <Cerimonie multiplier={globalScrollMultiplier} />
          <Sagre multiplier={globalScrollMultiplier} />
          <Industria multiplier={globalScrollMultiplier} />
          <Fiere multiplier={globalScrollMultiplier} />
        </Suspense>
        <Ground
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

