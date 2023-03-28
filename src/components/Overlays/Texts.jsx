import React from 'react';
import { Html, useScroll } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

import './Texts.css';

export default function Texts({ props }) {

  const scrollData = useScroll();
  const gl = useThree((state) => state.gl);

  const handleClick = () => {
    const scrollTop = scrollData.el.scrollTop
    scrollData.el.scrollTo({ top: scrollTop + window.innerHeight, behavior: 'smooth' })
  }

  const Areas = [
    {
      id: 0,
      title: "Eventi Aziendali",
      text: "Allestimenti e catering per meeting ed eventi aziendali",
      position: [11, 11, 33],
      rotation: [0, 0.72, 0],
      url: "https://www.google.com",
    },
    {
      id: 1,
      title: "Cerimonie",
      text: "Catering e allestimenti per cerimonie: dai Battesimi ai Matrimoni",
      position: [15, 10, 98.5],
      rotation: [0, -1.585, 0],
      url: "https://www.google.com",
    },
    {
      id: 2,
      title: "Sagre e Feste",
      text: "Ogni tipo di noleggio: dalla cucina alla tavola",
      position: [-232, 11, 87],
      rotation: [0, 2.30, 0],
      url: "https://www.google.com",
    },
    {
      id: 3,
      title: "Industria",
      text: "Capannoni per magazzini, officine, laboratori, uffici",
      position: [-640, 12, -11],
      rotation: [0, 2.1, 0],
      url: "https://www.google.com",
    },
    {
      id: 4,
      title: "Fiere e Grandi Eventi",
      text: "Allestimenti e catering di fiere e grandi eventi",
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
        <group key={area.id}>
          <Html
            className="AreaTematica"
            transform
            position={area.position}
            rotation={area.rotation}
            portal={{ current: scrollData.fixed }}
          >
            <h2>{area.title}</h2>
            <p>{area.text}</p>
            <a href={area.url} className="btn">
              Scopri di più
            </a>
          </Html>
          {/* <Html
            transform
            scale={[2, 2, 2]}
            position={[area.position[0], area.position[1] - 15, area.position[2]]}
            sprite
            portal={{ current: gl.domElement.parentElement }}
          >
            <div className='overlays'>
              <a className='arrow' onClick={handleClick}>scroll</a>
            </div>
          </Html> */}
        </group>
      ))}
    </>
  )
}
