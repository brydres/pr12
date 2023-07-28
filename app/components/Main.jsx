import React from 'react'
import "@/app/globals.css"

export default function Main() {
  return (
    <>
    <main>
  <section className="container">
    <div className="service" id="services">
      <h3 className="service-title">We offer high demand services</h3>
      <div className="service-container">
        <div className="single-service">
          <div className="service-img">
            <i className="fas fa-pen fa-2x" />
          </div>
          <div className="service-infor">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia amet sit voluptatum nesciunt natus beatae minus alias
              vero aperiam?
            </p>
            <button>Get started</button>
          </div>
        </div>
        <div className="single-service">
          <div className="service-img green-bg">
            <i className="far fa-code fa-2x" />
          </div>
          <div className="service-infor">
            <h3>Front End</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              molestias aperiam iste fugiat dolore adipisci inventore vero nihil
              odio accusantium!
            </p>
            <button className="blue-btn">Get started</button>
          </div>
        </div>
        <div className="single-service">
          <div className="service-img red-bg">
            <i className="fas fa-server fa-2x" />
          </div>
          <div className="service-infor">
            <h3>Back End</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              iusto repellat magnam ducimus molestiae eaque exercitationem
              nostrum ullam? Recusandae, rerum.
            </p>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container" id="ourwork">
    <div className="designs">
      <h3>Good design means good business</h3>
      <div className="design-container">
        <div className="design-img">
          <div className="single-design">
            <div className="design-img">
              <img src="../assets/images/smarthome.jpg" alt="" />
            </div>
            <div className="design-infor">
              <p>Full stack application</p>
              <h4>smart home dashboard</h4>
            </div>
          </div>
          <div className="single-design">
            <div className="design-img">
              <img src="../assets/images/onboard.png" alt="" />
            </div>
            <div className="design-infor">
              <p>UI/UX design</p>
              <h4>onboard application</h4>
            </div>
          </div>
          <div className="single-design">
            <div className="design-img">
              <img src="../assets/images/booking.png" alt="" />
            </div>
            <div className="design-infor">
              <p>Mobile application</p>
              <h4>Booking system</h4>
            </div>
          </div>
          <div className="single-design">
            <div className="design-img">
              <img src="../assets/images/juice-product.png" alt="" />
            </div>
            <div className="design-infor">
              <p>Front End application</p>
              <h4>Juice product homepage</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="link">
        <a href="#">
          see more <i className="fal fa-long-arrow-right" />
        </a>
      </div>
    </div>
  </section>
  <section className="container">
    <div className="team">
      <div className="column-left">
        <p className="red-color">Meet the team</p>
        <h5>We are chilled and a laidblack team</h5>
        <p className="team-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="column-right">
        <div>
          <img src="../assets/images/person3.png" alt="" />
        </div>
        <div className="images">
          <img src="../assets/images/person1.png" alt="" srcSet="" />
          <img src="../assets/images/person2.png" alt="" />
        </div>
      </div>
    </div>
    <div className="team-section" id="clients">
      <p className="quote">
        <q>
          Fast and outstanding results. Eddie understands their customers need.
          They have a young and talented team.
        </q>
      </p>
      <div className="testmony">
        <img src="../assets/images/person4.png" />
        <div className="user-info">
          <p>Carlos Tran</p>
          <p>The decorate gatsby</p>
        </div>
      </div>
    </div>
  </section>
</main>

    </>
  )
}
