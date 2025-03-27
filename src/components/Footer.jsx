import React from 'react';

function Footer() {
  return (
    <>
    <footer className='footer'>
                  <div className='footer-top'>
                      <div className='ft-left'> 
                        <h2>Teknolojik Yemekler</h2>
                          <div className="contacts">
                            <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="location" />
                            <p>341 Londonderry Road, Istanbul Türkiye</p>
                          </div>
                          <div className="contacts">
                            <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="email" />
                            <p>aciktim@teknolojikyemekler.com</p>
                          </div>
                          <div className="contacts">
                            <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="phone" />
                            <p>+90 216 123 45 67</p>
                          </div>
                      </div>
                      <div className='ft-center'>
                        <h4>Hot Menu</h4>
                        <h6>Terminal Pizza</h6>
                        <h6>5 Kişilik Hackathlon Pizza</h6>
                        <h6>useEffect Tavuklu Pizza</h6>
                        <h6>Beyaz Console Frosty</h6>
                        <h6>Testler Geçti Mutlu Burger</h6>
                        <h6>Position Absolute Acı Burger</h6>
                      </div>
                      <div className='ft-right'>
                        <h4>Instagram</h4>
                        <div className='images'>
                            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" />
                            </div>
                            <div className='images'>
                            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" />
                        </div>
                      </div>
                  </div>
                  <hr />
                  <div className='footer-bottom'>
                  <p>© 2023 Teknolojik Yemekler.</p>
                  <i class="fa-brands fa-twitter"></i>
                  </div>
              </footer>
    </>
  )
}

export default Footer