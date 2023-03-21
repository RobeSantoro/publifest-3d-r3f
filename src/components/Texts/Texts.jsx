import React from 'react';
import {Html, useScroll} from '@react-three/drei';
import './Texts.css';
import {FrontSide} from 'three';

export default function Texts({props}) {

  const scrollData = useScroll();

  const Areas = [
    {
      id: 0,
      title: "Eventi Aziendali",
      text: "Organizzazione di meeting e eventi aziendali",
      position: [11, 11, 33],
      rotation: [0, 0.72, 0],
      url: "https://www.google.com",
    },
    {
      id: 1,
      title: "Cerimonie",
      text: " Ogni tipo di cerimonia: dai Battesimi ai Matrimoni",
      position: [15, 10, 98.5],
      rotation: [0, -1.585, 0],
      url: "https://www.google.com",
    },
    {
      id: 2,
      title: "Sagre e Feste",
      text: "Organizzazione di sagre e feste di ogni tipo",
      position: [-232, 11, 87],
      rotation: [0, 2.30, 0],
      url: "https://www.google.com",
    },
    {
      id: 3,
      title: "Industria",
      text: "Capannoni per magazzini, officine, laboratori, uffici",
      position: [0, 300, 0],
      rotation: [0, 0, 0],
      url: "https://www.google.com",
    },
    {
      id: 4,
      title: "Fiere e Grandi Eventi",
      text: "Organizzazione di fiere e grandi eventi",
      position: [0, 300, 0],
      rotation: [0, 0, 0],
      url: "https://www.google.com",
    },
    {
      id: 5,
      title: "Contattaci",
      text: "Per qualsiasi informazione o preventivo",
      position: [0, 300, 0],
      rotation: [0, 0, 0],
      url: "https://www.google.com",
    },
  ]

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
          style={{opacity: 1}}>
          <h2>{area.title}</h2>
          <p>{area.text}</p>
          <a href={area.url} className="btn">
            Scopri di più
          </a>
        </Html>
      ))}
    </>
  )
}