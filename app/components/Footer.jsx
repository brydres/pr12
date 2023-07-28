import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="footer container" id="contacts">
  <div className="col-1">
    <nav>
      <li>
        <a href="#">home</a>
      </li>
      <li>
        <a href="#">services</a>
      </li>
      <li>
        <a href="#">our work</a>
      </li>
      <li>
        <a href="#">clients</a>
      </li>
      <li>
        <a href="#">contacts</a>
      </li>
    </nav>
  </div>
  <div className="col-1">
    <h2>Edie</h2>
    <div className="social">
      <img src="../assets/icons/instagram.svg" />
      <img src="../assets/icons/linkedin.svg" />
      <img src="../assets/icons/twitter.svg" />
    </div>
  </div>
  <div className="col-1">
    <div className="input">
      <label htmlFor="email">want us to conduct you?</label>
      <div className="input-feild">
        <input type="email" name="email" placeholder="email" />
        <input type="submit" defaultValue="Join" />
      </div>
    </div>
  </div>
</div>

    </>
  )
}
