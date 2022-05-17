import React from 'react'

const Loan = () => {
  return (
    //Get a loan

    <section id="get-loan">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-5">
          <div class="picture">
         <img className='img-fluid' src="img/loan-image-1_zakfvz.png" alt="" />
        </div>
      </div>
        <div class="col-md-6 m">
           <h4>Get a loan in as easy as 1, 2, 3</h4>
           <div className='divider'></div>
           <p className='mt-3'>Let Lendha finance your lifestyle and expenses, 
             you pay us back in installments.</p>
            <div className='pictures mt-2'>
              <img src="img/check_box_qt0fpn.svg" alt="" /><span className='ms-3'>Sign up and verify your identity.</span>
            </div>
            <div class="pictures mt-2">
              <img src="img/check_box_qt0fpn.svg" alt="" /><span className='ms-3'>Sign up and verify your identity.</span>
            </div>
            <div class="pictures mt-2">
              <img src="img/check_box_qt0fpn.svg" alt="" /><span className='ms-3'>Sign up and verify your identity.</span>
            </div>
            <button><a className='text-decorations text-white' href="#">Take a loan</a></button>
        </div>
      </div>
    </div>
   </section>
)
}

export default Loan;