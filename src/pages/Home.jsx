import React from 'react'
import { useHistory} from 'react-router-dom'
import { pizza_data } from '../data';
import { Button } from 'reactstrap';
import '../home.css'
import Footer from '../components/Footer';

const categories = [
  {name:"YENİ! Kore", img:"/images/iteration-2-images/icons/1.svg"},
  { name: "Pizza", img: "/images/iteration-2-images/icons/2.svg" },
  { name: "Burger", img: "/images/iteration-2-images/icons/3.svg" },
  { name: "Kızartmalar", img: "/images/iteration-2-images/icons/4.svg" },
  { name: "Fast food", img: "/images/iteration-2-images/icons/5.svg" },
  { name: "Gazlı İçecek", img: "/images/iteration-2-images/icons/6.svg" }
];
const categories2 = [
  {name:"Ramen", img:"/images/iteration-2-images/icons/1.svg"},
  { name: "Pizza", img: "/images/iteration-2-images/icons/2.svg" },
  { name: "Burger", img: "/images/iteration-2-images/icons/3.svg" },
  { name: "French fries", img: "/images/iteration-2-images/icons/4.svg" },
  { name: "Fast food", img: "/images/iteration-2-images/icons/5.svg" },
  { name: "Soft drinks", img: "/images/iteration-2-images/icons/6.svg" }
];
const products = [
{name:"Terminal Pizza", img:"/images/iteration-2-images/pictures/food-1.png"},
 {name: "Position Absolute Acı Pizza" , img:"/images/iteration-2-images/pictures/food-2.png"},
  {name:"useEffect Tavuklu Burger" , img:"/images/iteration-2-images/pictures/food-3.png"}
];

function Home() {
  const history = useHistory();

  const handleButtonClick = () => {
    const secilen = pizza_data[0];
    history.push(`/orderPizza/${secilen.pisim}`); 
  }



  return (

    <div>
            {/* Header */}
            <header className='homeHeader'>
              <img src='/images/iteration-1-images/logo.svg' alt='logo'/> 
              <h2>Kod Acıktırır Pizza, Doyurur</h2>
              <button data-cy="home-button" onClick={handleButtonClick}>ACIKTIM</button>
            </header>
            
              {/* Kategoriler */}
              <nav className="nav">
                {categories.map((category) => (
                  <Button  key={category.name} className="category-btn" onClick={handleButtonClick}>
                    <img src={category.img} alt={category.name} className="category-icon" />
                    {category.name}
                  </Button>
                ))}
              </nav>

              {/* Öne Çıkanlar */}
            <section className="featured">
              <div className="featured-left">
                <h2>Özel Lezzetus</h2>
                <h4>Position:Absolute Acı Burger</h4>
                <Button className='featured-btn' onClick={handleButtonClick} data-cy="nav-btn">SİPARİŞ VER</Button>
              </div>
              <div className='featured-right'>
                <div className="featured-right-item item-first">
                  <h4>Hackathon Burger Menü</h4>
                  <Button className='featured-btn mt-2' onClick={handleButtonClick}>SİPARİŞ VER</Button>
                </div>
                <div className="featured-right-item item-second">
                  <h4><span>Çoooook</span> hızlı npm gibi kurye</h4>
                  <Button className='featured-btn mt-2' onClick={handleButtonClick}>SİPARİŞ VER</Button>
                </div>
              </div>
            </section>
                {/* Title */}
              <section className='titles'>
                  <h4>en çok paketlenen menüler</h4>
                  <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
              </section>

              {/* Kategoriler */}
              <nav className="nav second-nav">
                {categories2.map((category) => (
                  <Button  key={category.name} className="category-btn" onClick={handleButtonClick} >
                    <img src={category.img} alt={category.name} className="category-icon" />
                    {category.name}
                  </Button>
                ))}
              </nav>

               {/* Ürün Listesi */}
              <section className="products">
                
                  {products.map((product) => (
                    <div key={product} className="product-item">
                      <div className='img-div'>
                      <img src={product.img} />
                      </div>
                      <h6>{product.name}</h6>
                      <div className='products-details'>
                        <span>4.9</span>
                        <span>(200)</span>
                        <span className='fw-bold'>60₺</span>
                      </div>
                    </div>
                  ))}
                
              </section>
              <div className='home-footer'>
              <Footer />
              </div>
                  
              

    </div>
  )
}
  
export default Home