import { lazy, Suspense } from 'react'
import { ScrollControls, Environment } from '@react-three/drei'

import Ground from "./Ground";
import Camera from "./Camera";
const Meeting = lazy(() => import("./areas/Meeting"));
const Cerimonie = lazy(() => import("./areas/Cerimonie"));
const Sagre = lazy(() => import("./areas/Sagre"));
const Industria = lazy(() => import("./areas/Industria"));
const Fiere = lazy(() => import("./areas/Fiere"));

import Texts from "./Overlays/Texts";
import Overlays from "./Overlays/Overlays";

export default function World() {

  const globalScrollMultiplier = 10;

  return (
    <>
      <ScrollControls pages={6} damping={0.5} maxSpeed={0.25}>
        <Camera multiplier={globalScrollMultiplier} />

          <Meeting multiplier={globalScrollMultiplier} />
          <Cerimonie multiplier={globalScrollMultiplier} />
          <Sagre multiplier={globalScrollMultiplier} />
          <Industria multiplier={globalScrollMultiplier} />
          <Fiere multiplier={globalScrollMultiplier} />
          <Overlays />


        <Texts />
        <fog attach="fog" args={['white', 0.0001, 100]} />
      </ScrollControls>

      <Ground position={[-500, -0.01, -100]} scale={[2500, 1500, 1]} />
      <Environment files={['/px.png', '/nx.png', '/py.png', '/ny.png', '/pz.png', '/nz.png']} blur={1} background={false} />
    </>
  )
}

