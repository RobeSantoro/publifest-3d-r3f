import React, { useRef } from 'react';
import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import * as THREE from 'three';

import './Texts.css';

export default function Texts() {

  const scrollData = useScroll();

  const Areas = [
    {
      id: 0,
      title: "Eventi Aziendali",
      shortTitle: "eventi",
      text: "Allestimenti e catering per meeting ed eventi aziendali",
      position: [11, 12, 33],
      rotation: [0, 0.72, 0],
      url: "https://www.google.com",
    },
    {
      id: 1,
      title: "Cerimonie",
      shortTitle: "cerimonie",
      text: "Catering e allestimenti per cerimonie: dai Battesimi ai Matrimoni",
      position: [16, 10, 98],
      rotation: [0, -1.585, 0],
      url: "https://www.google.com",
    },
    {
      id: 2,
      title: "Sagre e Feste",
      shortTitle: "sagre",
      text: "Ogni tipo di noleggio: dalla cucina alla tavola",
      position: [-232, 11, 87],
      rotation: [0, 2.30, 0],
      url: "https://www.google.com",
    },
    {
      id: 3,
      title: "Industria",
      shortTitle: "industria",
      text: "Capannoni per magazzini, officine, laboratori, uffici",
      position: [-640, 10.5, -11],
      rotation: [0, 2.1, 0],
      url: "https://www.google.com",
    },
    {
      id: 4,
      title: "Eventi Sportivi e Fiere",
      shortTitle: "fiere",
      text: "Allestimenti e catering di fiere e grandi eventi",
      position: [-1152, 10.3, -409],
      rotation: [0, 1.4, 0],
      url: "https://www.google.com",
    }
  ]

  useFrame(({ camera }) => {
    Areas.forEach((area) => {

      const areaPosition = new THREE.Vector3();
      areaPosition.set(area.position[0], area.position[1], area.position[2])
      const distance = camera.position.distanceTo(areaPosition);

      const opacity = 1 - (distance - 20) / 20;
      const divArea = document.querySelector(`.${area.shortTitle}`);
      if (divArea) {
        divArea.style.opacity = opacity;
      }
    });
  });


  return (
    <>
      {Areas.map((area) => (

        <Html
          key={area.id}
          className={`AreaTematica ${area.shortTitle}`}
          transform
          position={area.position}
          rotation={area.rotation}
          portal={{ current: scrollData.fixed }}
          sprite={area.shortTitle === "fiere"}
        >

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