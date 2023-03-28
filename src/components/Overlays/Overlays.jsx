import {Html, useScroll} from '@react-three/drei'
import React from 'react'

export default function Overlays() {

    const scrollData = useScroll();

    return (
        <Html portal={{current: scrollData.fixed}}>
        <div className='overlays'>
            <button className='arrow'>Scroll</button>
        </div>
        </Html>
    )
}