import React from 'react'
import { Html } from '@react-three/drei'
import { useProgress } from '@react-three/drei'

export default function Loading() {
    const { progress } = useProgress()
  
    return <Html center prepend as='div' style={{
      color: '#002753',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: 'bold'
    }}
    > {progress.toFixed(0)}%</Html>
  }