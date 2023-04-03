import { lazy, Suspense } from 'react'
import { ScrollControls, Environment } from '@react-three/drei'

import Texts from "./Overlays/Texts";
import Overlays from "./Overlays/Overlays";

import Ground from "./Ground";
import Camera from "./Camera";
import Logo from "./Logo";

const Meeting = lazy(() => import("./areas/Meeting"));
const Cerimonie = lazy(() => import("./areas/Cerimonie"));
const Sagre = lazy(() => import("./areas/Sagre"));
const Industria = lazy(() => import("./areas/Industria"));
const Fiere = lazy(() => import("./areas/Fiere"));

export default function World() {

  const scrollMultiplier = 10;

  return (
    <>
      <Ground position={[-500, -0.01, -100]} scale={[2500, 1500, 1]} />
      <Environment preset="city" blur={1} background={false} />
      <Logo />


      <ScrollControls pages={6} damping={0.5} maxSpeed={0.25}>
        <fog attach="fog" args={['white', 0.0001, 100]} />
        <Overlays />
        <Texts />

        <Meeting multiplier={scrollMultiplier} />
        <Cerimonie multiplier={scrollMultiplier} />
        <Sagre multiplier={scrollMultiplier} />
        <Industria multiplier={scrollMultiplier} />
        <Fiere multiplier={scrollMultiplier} />

        <Camera multiplier={scrollMultiplier} />
      </ScrollControls>
    </>

  )
}

