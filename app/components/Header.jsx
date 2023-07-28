import React from 'react'

export default function header() {
  return (
    <>
    <header>
  <div className="container header">
    <div className="logo">
      <h2>Edie</h2>
    </div>
    <div className="desktopNav">
      <nav>
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#ourwork">our work</a>
          </li>
          <li>
            <a href="#clients">clients</a>
          </li>
          <li>
            <a href="#contacts">contacts</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="menu-icon">
      <i className="fa fa-bars fa-2x" />
    </div>
  </div>
  <div className="mobileNav">
    <nav>
      <ul>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#ourwork">our work</a>
        </li>
        <li>
          <a href="#clients">clients</a>
        </li>
        <li>
          <a href="#contacts">contacts</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

    </>
  )
}
