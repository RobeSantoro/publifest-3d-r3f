import React, { forwardRef } from "react"
import "./Overlay.css"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      // caption.current.innerText = scroll.current.toFixed(2)
    }}
    className="scroll">
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Eventi Aziendali</h1>
        Organizzazione di Meeting e Eventi Aziendali
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Matrimoni e Cerimonie</h1>
        Ogni tipo di cerimonia: dai battesimi ai matrimoni
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Sagre e Feste</h1>
        Organizzazione di sagre e feste di ogni tipo
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Industria</h1>
        Capannoni per magazzini, officine, laboratori, uffici
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Fiere e Grandi Eventi</h1>
        Organizzazione di fiere e grandi eventi
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Contattaci</h1>
        Per qualsiasi informazione o preventivo
        <button className="btn">Contattaci</button>
      </div>
    </div>
    {/* <span className="caption" ref={caption}>
      0.00
    </span> */}
  </div>
))

export default Overlay
