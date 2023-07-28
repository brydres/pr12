import React from 'react'
import "@/app/globals.css"

export default function Container() {
  return (
    <>
    <div className="banner container" id="home">
  <div className="contents">
    <div className="content-infor">
      <p className="para">unhappy with your website?</p>
      <h2>We create bueatiful and fast web service</h2>
    </div>
  </div>
  <div className="banner-img container">
    <img src="../assets/images/heroImage.jpg" />
  </div>
  <div className="banner-txt contents">
    <h2>Story, emotion and purpose</h2>
    <p>
      We help transform your ideas into real world applications that will
      outerperform your toughest competition and help you achieve your strategic
      goals in short period of time.
    </p>
    <div className="input">
      <label htmlFor="email">want us to conduct you?</label>
      <div className="input-feild">
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="submit" defaultValue="Join" />
      </div>
    </div>
  </div>
</div>

    </>
  )
}
