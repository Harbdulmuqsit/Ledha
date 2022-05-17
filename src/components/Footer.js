import React from 'react'

const Footer = () => {
  return (
    
        // footer
        <section id="footer">
         <div className='container'>
           <div className='row'>
             <div className='col-md-4 m'>
               <div className='links'>
                <p style={{textDecoration: 'underline'}}><a href="#">Home</a></p>
                 <p>Loans</p>
                 <p>Invest</p>
                 <p>Food Mart</p>
                 <p>FAQ</p>
                 <p>Requirements</p>
               </div>
             </div>
             <div className='col-md-4 m'>
                <div className='address'>
                  <p>info@lendha.com</p>
                  <p>+234 816 791 0608 </p>
                  <p>134 Bode Thomas Street, Surulere, Lagos State.</p>
                </div>
             </div>
             <div className='col-md-4 m'>
              <div className='socials'>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="img/facebook.svg?a02d3695baa3d8cc4da5b6ed2660cecf" alt="Social" /></a>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="img/twitter.svg?3c18df25932d950b1dac71d10c8c4276" alt="Social" /></a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="img/instagram.svg?d5bafd7f650b7156bedeac853dcb7c00" alt="Social" /></a>
                  </div>
              <div className='apps'>
                <a href="#"><img src="img/googlestore.png?72d84cf0211b32f7faccea5b8ba62a18" alt="App" /></a>
                <a href="#"><img src="img/iosstore.png?1a3ff9e84d762917ec040a06ccde559a" alt="App" /></a>
              </div>	 
              <p class="footer_link">Designed & Developed by Olamide.</p>
            </div>
           </div>
         </div>
        </section>
  )
}

export default Footer;