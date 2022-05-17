import React from 'react'

const FAQ = () => {
  return (
   
        // Frequently asked question
        <section id="FAQ">
           <div className='container' >
             <div className='row'>
               <div className='col-md-6'>
                <div className='faq_questions mb-4'>
                  <h3>Frequently Asked Questions</h3>
                  <div className='questions'>
                    <div className='question'>
                      <h6>What is Lendha about?</h6>
                      <p>Lendha is a quick money lending platform. 
                        We provide facility for emergency funds, house/office/shop 
                        rent and lifestyle loans.</p>
                      </div>
                      <div className='question'>
                        <h6>Do I need to come over to Lendha office to apply?</h6>
                        <p>No, you don’t have to. The whole process is done on
                           the internet. Don’t worry, your information is 
                           safe with us.</p>
                          </div>
                          <div className='question'>
                            <h6>How do I get my documents across to you?</h6>
                            <p>All documents can be scanned and uploaded as stated 
                              on the website.</p>
                            </div>
                            <div className='question'>
                              <h6>Do I have to be paid in employment to get a loan from Lendha?</h6>
                              <p>No. You need to have a regular source of income.</p>
                            </div>
                          </div>
                <a className='text_link' href="/faq">See more FAQ</a></div>
                  </div>
               <div className='col-md-6'>
                <div className='form_container'>
                  <div className='form_container_body"'>
                    <div className='sub_section_header'>
                      <h4>Contact us</h4>
                      <div className='divider'></div>
                      <hr />
                    </div>
                    <p className='sub_text'>If you need help with your user account, have questions, or are experiencing any difficulty, please do not hesitate to contact us.</p>
                    <form className='form contact_form'>
                      <div className='form-group'>
                        <label htmlFor='full-name'>Full name</label> <input name="full_name" type="text" className='form-control' value="" />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Email'>Email address</label>
                        <input name="email" type="email" className='form-control' value="" />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='Messages'>Message</label>
                        <textarea name="message" type="text" class="form-control" rows="3"></textarea>
                      </div>
                      <button type="submit" className='btn_blue'>Contact us</button>
                </form>
              </div>
              </div>
               </div>
             </div>
           </div>
        </section>
  )
}

export default FAQ;
