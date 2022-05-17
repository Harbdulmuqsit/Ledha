import React, { Component } from 'react'

 class Herosection extends Component {
  render() {
    return (
      <section id="home" class="  main">
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-5'>
            <div className='banner_text_and_button center'>
              <h1>Borrow money, Invest in loans and Earn returns.</h1>
              <h4>Get quick access to loans to pay house rent, finance your lifestyle or emergency at a low rate.</h4>
              <h4>Up to ₦8,000,000 - No paper work.</h4>
              <div className='actions'>
                <button className='loans'><a class="text-decorations" href="/loans">Take Loan</a></button>
                <button className='invest'><a class="text-decorations text-white" href="/invest">Invest Now</a></button>
              </div>
              </div>
              <div className='main-img'>
                <img className='img-fluid' src="/img/line_w_y_w_emou5w.png" alt="" />
              </div>
              <div className='main-img1'>
                <img className='img-fluid' src="/img/banner_we64fq.jpg" alt="" />
              </div>
            </div>       
        </div>
      </div>
    </section>
    )
  }
}

export default Herosection;
