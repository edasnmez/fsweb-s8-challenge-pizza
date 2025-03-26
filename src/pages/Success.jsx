import React from 'react'
import "../Success.css";
import logo from "/images/iteration-1-images/logo.svg"; 

function Success() {
  return (
    <div className="success-container">
      <img src={logo} alt="Teknolojik Yemekler Logo" className="success-logo" />
      <div>
      <h2 className="success-message">TEBRİKLER!</h2>
      <h3 className="success-message">SİPARİŞİNİZ ALINDI!</h3>
      </div>
    </div>
  )
}

export default Success