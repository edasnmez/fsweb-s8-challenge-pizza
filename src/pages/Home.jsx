import React from 'react'
import { useHistory} from 'react-router-dom'
import { pizza_data } from '../data';
function Home() {
  const history = useHistory();

  const handleButtonClick = () => {
    const secilen = pizza_data[0];
    history.push(`/orderPizza/${secilen.pisim}`); 
  }

  return (
    <div>
            <header className='homeHeader'>
              <img src='/images/iteration-1-images/logo.svg' alt='logo'/> 
              <h2>Kod Acıktırır Pizza, Doyurur</h2>
              <button data-cy="home-button" onClick={handleButtonClick}>ACIKTIM</button>
            </header>
    </div>
  )
}
  
export default Home