import React from 'react'

const FinanceLifestyle = ()=> {
  return (
    //finace lifestyle section

    <section id="finance">
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Finance your lifestyle with Lendha</h1>
          <h6>Purchase an item and spread the expenses over a period of time.</h6>
          <h6>Buy now, Pay later.</h6>
      </div>
      </div>
      <div className='row ms-5 mt-4'>
        <div className='col-md-4'>
          <div className='features'>
            <img className='img-fluid w-25 mb-3' src="img/upto.svg" alt="" />
            <h3>Up to N3,000,000</h3>
            <p>Apply for up to N5,000,000 quick loan.</p>
          </div>
          </div>
          <div class="col-md-4">
            <div class="features">
              <img className='img-fluid w-25 mb-3' src="img/interest.svg" alt="" />
              <h3>Low interest rate</h3>
              <p>Interest rate as low as 3.5%.</p>
            </div>
            </div>
            <div className='col-md-4'>
              <div class="features">
                <img className='img-fluid w-25 mb-3' src="img/approval.svg" alt="" />
                <h3>Approval in 24 hours</h3>
                <p>Get credited within 24hours.</p>
              </div>
              </div>
              <div className='col-md-4'>
                <div className='features'>
                  <img className='img-fluid w-25 mb-3' src="img/paperwork.svg" alt="" />
                  <h3>No paperwork</h3>
                  <p>You do not have to visit our office, all applications are online.</p>
                </div>
                </div>
                <div className='col-md-4'>
                  <div className='features'>
                    <img className='img-fluid w-25 mb-3' src="img/repayment.svg" alt="" />
                    <h3>Simplified and easy repayment</h3>
                    <p>Up to Six (6) monthly installments.</p>
                  </div>
                  </div>
                  <div class="col-md-4">
                    <div class="features">
                      <img className='img-fluid w-25 mb-3' src="img/customer.svg" alt="" />
                      <h3>High customer satisfaction</h3>
                      <p>Customers’ satisfaction is our goal.</p>
                    </div>
                    </div>
          
        </div>
      </div>
  </section>
  )
}

export default FinanceLifestyle;