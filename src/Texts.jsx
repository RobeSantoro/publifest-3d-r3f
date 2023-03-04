import './Texts.css';
import React from 'react';
import {useState} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {Html, useScroll} from '@react-three/drei';

const Areas = [
  {
    id: 0,
    title: "Eventi Aziendali",
    text: "Organizzazione di meeting e eventi aziendali",
    position: [10, 7, 35],
    rotation: [0, 0.75, 0],
  },
  {
    id: 1,
    title: "Cerimonie",
    text: "Ogni tipo di cerimonia: dai Battesimi ai Matrimoni",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  },
  {
    id: 2,
    title: "Sagre e Feste",
    text: "Organizzazione di sagre e feste di ogni tipo",
    position: [0, 0, 0],
    rotation: [0, 0, 0],    
  },
  {
    id: 3,
    title: "Industria",
    text: "Capannoni per magazzini, officine, laboratori, uffici",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  },
  {
    id: 4,
    title: "Fiere e Grandi Eventi",
    text: "Organizzazione di fiere e grandi eventi",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  },
  {
    id: 5,
    title: "Contattaci",
    text: "Per qualsiasi informazione o preventivo",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  },
]


export default function Texts({props}) {

  const scrollData = useScroll();

  return (
    <>
      <Html
        // as='div'
        transform
        className="text"
        position={[10, 7, 35]}
        rotation={[0, 0.75, 0]}
        // sprite 
        // scale={1}
        portal={{current: scrollData.fixed}}
      >
        <h2>Eventi Aziendali</h2>
        <p>Organizzazione di meeting e eventi aziendali</p>
        <button className="btn">Scopri di più</button>
      </Html>
    </>
  )
}

/* 
<div style={{height: "100vh"}}>
<div className="area">
  <h2>Matrimoni e Cerimonie</h2>
  Ogni tipo di cerimonia: dai battesimi ai matrimoni
</div>
</div>
<div style={{height: "100vh"}}>
<div className="area">
  <h2>Sagre e Feste</h2>
  Organizzazione di sagre e feste di ogni tipo
</div>
</div>
<div style={{height: "100vh"}}>
<div className="area">
  <h2>Industria</h2>
  Capannoni per magazzini, officine, laboratori, uffici
</div>
</div>
<div style={{height: "100vh"}}>
<div className="area">
  <h2>Fiere e Grandi Eventi</h2>
  Organizzazione di fiere e grandi eventi
</div>
</div>
<div style={{height: "100vh"}}>
<div className="area">
  <h2>Contattaci</h2>
  <p>Per qualsiasi informazione o preventivo</p>
</div>
</div>
</div> */