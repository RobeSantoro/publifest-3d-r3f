import React, { forwardRef } from "react"
import "./Overlay.css"

const Overlay = forwardRef(({ scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
    }}
    className="scroll">
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h2>Eventi Aziendali</h2>
        Organizzazione di Meeting e Eventi Aziendali
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h2>Matrimoni e Cerimonie</h2>
        Ogni tipo di cerimonia: dai battesimi ai matrimoni
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h2>Sagre e Feste</h2>
        Organizzazione di sagre e feste di ogni tipo
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h2>Industria</h2>
        Capannoni per magazzini, officine, laboratori, uffici
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h2>Fiere e Grandi Eventi</h2>
        Organizzazione di fiere e grandi eventi
        <button className="btn">Scopri di più</button>
      </div>
    </div>
    <div style={{ height: "100vh" }}></div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h2>Contattaci</h2>
        Per qualsiasi informazione o preventivo
        <button className="btn">Contattaci</button>
      </div>
    </div>
  </div>
))

export default Overlay
