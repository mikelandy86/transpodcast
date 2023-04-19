import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
          <div className='footer-container'>

       
<div className="podstore-icon-container">
  <a href='https://podcasts.apple.com/se/podcast/sex-som-trans/id1682796785'>
  <img src='apple-appstore.svg'></img>
  </a>
  <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzLzYzNjIzYTliNmRiMjM1MDAxMjFlNmVjOA?ep=14'>
  <img src='google-playstore.svg'></img>
  </a>
</div>
<div className='bottom-container'>
  <div className='socialmedia-container'>


  {/* <a><img src='facebook.svg'></img></a> */}
  <a href="https://www.instagram.com/sexsomtrans"><img src='instagram.svg'></img></a>
  </div>
  <span>
  <h3>A PODCAST OF &nbsp;</h3>
  <h2>MANDY RICH</h2>
  </span>
</div>
</div>
        </div>
      )
}
