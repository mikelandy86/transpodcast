import React from 'react'
import { Fade } from "react-awesome-reveal";

export default function Info() {
    return (
        <div className="info-section">
          <Fade duration={1000} direction='left'>
<div className='info-container'>
  <h2>Mer om podden</h2>
  <p>Sex som trans är en podcast som utforskar sex och sexualitet från ett transperspektiv. Mandy Rich delar med sig av sina personliga erfarenheter och bjuder in gäster för att diskutera mer djupgående. Podden syftar till att öppna upp en dialog kring sex och relationer, och ge lyssnarna mer kunskap.</p>

  </div>
  <div className='info-container'>
  <h2>Ge feedback</h2>
  <p>Har upprättat ett telefonnummer till en röstbrevlåda för er lyssnare som vill lämna synpunkter, tankar eller egna erfarenheter efter varje avsnitt.</p>

  </div>
  <div className='info-container'>
  <h2>Kontakt</h2>
  <p>Har du frågor, funderingar eller vill komma med förslag på gäster? Hör av dig till mig på <a href="mailto:sexsomtrans@gmail.com?Subject=&Body=" title="Hello" >sexsomtrans@gmail.com</a></p>
  </div>
  </Fade>
        </div>
      )
}