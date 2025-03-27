import React from 'react'
import "../Success.css";
import logo from "/images/iteration-1-images/logo.svg"; 
import Footer from '../components/Footer';

function Success({ orderData }) {
  return (
    <>
    <div className="success-container">
      <div className='msg-top'>
      <img src={logo} alt="Teknolojik Yemekler Logo" className="success-logo" />
      <div className='message-container'>
      <h2 className=" msg-one">lezzetin yolda</h2>
      <h3 className=" msg-two">SİPARİŞİNİZ ALINDI 🎉</h3>
      </div>
      <hr className='line'/>
    </div>

    <div className='msg-center'>
      <h4 className='pizza-name'></h4>
      <p className='details' data-cy="details-size"><span className="title">Boyut:</span> {orderData.boyut}</p>
      <p className='details' data-cy="dough"><span className="title">Hamur:</span> {orderData.kalinlik}</p>
      <p className='details malzeme' ><span className="title">Ek Malzemeler:</span>
      {orderData.malzeme.map((malzeme, index) => (
      <span key={index} className="malzeme-item">{malzeme}</span>
    ))}
      </p>
    </div>

    <div className='msg-bottom'>
      <div className='price-container'>
          <h5 className='pc-title'>Sipariş Toplamı</h5>
          <div className='price'>
            <span className='secim'>Seçimler</span>
            <span>{orderData.secimler}</span>
          </div>
          <div className='price'>
            <span className='total'>Toplam</span>
            <span > {orderData.
toplamFiyat} </span>
          </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Success