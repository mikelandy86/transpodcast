import React from 'react'
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function Info() {

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

    return (
      <div className="info-section">
          {/* <Reveal keyframes={customAnimation} duration={2000}> */}
          <div>
         
<div className='info-container'>
  <h2>Mer om podden:</h2>
  <p>Sex som trans är en podcast som utforskar sex och sexualitet från ett transperspektiv. Mandy Rich delar med sig av sina personliga erfarenheter och bjuder in gäster för att diskutera mer djupgående. Podden syftar till att öppna upp en dialog kring sex och relationer, och ge lyssnarna mer kunskap.</p>

  </div>
  <div className='info-container'>
  <h2>Vill höra vad ni tycker:</h2>
  <p>Har upprättat en röstbrevlåda för er lyssnare som vill lämna synpunkter, tankar eller egna erfarenheter som sen kommer att spelas upp efter varje avsnitt. <a href="tel:087022525">08 - 702 25 25</a>
</p>

  </div>
  <div className='info-container'>
  <h2>Kontakt:</h2>
  <p>Har du/ni frågor, funderingar eller vill komma med förslag på gäster? Hör av er till mig på: <a href="mailto:sexsomtrans@gmail.com?Subject=&Body=" title="Hello" >sexsomtrans@gmail.com</a></p>
  </div>
  </div>
  {/* </Reveal> */}
        </div>
      )
}