import React from 'react'
import FormComponent from '../components/FormComponent'
import '../OrderPizza.css'
import Footer from '../components/Footer';
function OrderPizza({setOrderData}) {
  return (
    <div>
      <FormComponent setOrderData={setOrderData}  />
      <Footer />
      </div>
  );
}

export default OrderPizza