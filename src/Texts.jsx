import './Texts.css';
import React from 'react';
import {useState} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {Html, useScroll} from '@react-three/drei';

export default function Texts({props}) {

  const scrollData = useScroll();

  const Areas = [
    {
      id: 0,
      title: "Eventi Aziendali",
      text: "Organizzazione di meeting e eventi aziendali",
      position: [11, 8, 33],
      rotation: [0, 0.85, 0],
    },
    {
      id: 1,
      title: "Cerimonie",
      text: "Ogni tipo di cerimonia: dai Battesimi ai Matrimoni",
      position: [18, 8, 98.5],
      rotation: [0, -1.585, 0],
    },
    {
      id: 2,
      title: "Sagre e Feste",
      text: "Organizzazione di sagre e feste di ogni tipo",
      position: [0, 300, 0],
      rotation: [0, 0, 0],
    },
    {
      id: 3,
      title: "Industria",
      text: "Capannoni per magazzini, officine, laboratori, uffici",
      position: [0, 300, 0],
      rotation: [0, 0, 0],
    },
    {
      id: 4,
      title: "Fiere e Grandi Eventi",
      text: "Organizzazione di fiere e grandi eventi",
      position: [0, 300, 0],
      rotation: [0, 0, 0],
    },
    {
      id: 5,
      title: "Contattaci",
      text: "Per qualsiasi informazione o preventivo",
      position: [0, 300, 0],
      rotation: [0, 0, 0],
    },
  ]

  const clicked = (e) => {
    console.log(e);
  }

  return (
    <>
      {Areas.map((area) => (
        <Html


          className="AreaTematica"

          key={area.id}
          transform
          position={area.position}
          rotation={area.rotation}
          portal={{current: scrollData.fixed}}
        >
          <h2>{area.title}</h2>
          <span>{area.text}</span>
          <button onClick={clicked} className="btn">Scopri di più</button>
        </Html>
      ))}
    </>
  )
}