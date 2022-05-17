import React, { Component } from 'react'

class Invest extends Component {
  render() {
    return (
        // Invest the smart way in loans

       <section id="invest-smart">
       <div className='container'>
         <div className='row'>
           <div className='col-md-6'>
             <div className='invest-loans m'>
              <h4>Invest the smart way in loans</h4>
              <div className='divider'></div>
              <p>With as low as ₦50,000 for a
                 minimum duration of 6 months, invest the smart way in Loans today.</p>
            </div>
            <div className='pictures mt-2'>
              <img src="img/check_box_qt0fpn.svg" alt="" /><span className='ms-3'>Earn up to 25% per annum.</span>
            </div>
            <div class="pictures mt-2">
              <img src="img/check_box_qt0fpn.svg" alt="" /><span className='ms-3'>Lesser durations available.</span>
            </div>
            <div className='pictures mt-2'>
              <img src="img/check_box_qt0fpn.svg" alt="" /><span className='ms-3'>Securely grow your funds</span>
            </div>
            <button><a className='text-decorations' href="#">Invest</a></button>
        </div>
           <div className='col-md-6 mt-4 text-center'>
             <div className='picture'>
              <img className='ms-5' src="img/invest-image-1_cr02xi.png" alt="" />
           </div>
          </div>
         </div>
       </div>
     </section>

    )
  }
}

export default Invest;