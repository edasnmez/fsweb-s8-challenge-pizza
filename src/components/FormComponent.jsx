import React, { useState, useEffect } from 'react';
import { Col, Form, FormGroup, Input, Label, Row, Button, Card, CardTitle, CardText } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { pizza_data } from '../data';
import '../OrderPizza.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Navbar from './Navbar';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swal from 'sweetalert2';

const formVerileri ={
  boyut:"",
  kalinlik:"",
  isim:"",
  malzeme: [],
  siparisNotu:"",
}
const boyutlar =['S', 'M', 'L'];
const mesajlar ={
  isim:"En az 3 karakter giriniz.",
  boyut:"Lütfen pizzanın boyutunu seçiniz",
  kalinlik:"Lütfen pizzanın kalınlığını seçiniz",
  malzeme1:"En az 4 malzeme seçmelisiniz.",
}


function FormComponent({ setOrderData }) {
  const { pisim } = useParams();
  console.log('Pizza isim:', pisim); 
  const pizza = pizza_data.find(x => x.pisim === pisim);
  if (!pizza) {
    return <p>Pizza bulunamadı.</p>; 
  }

  const[formVeri,setFormVeri]=useState(formVerileri);
  const [adet, setAdet] = useState(1);
  const [errors, setErrors] = useState({
    boyut:"false",
    kalinlik:"false",
    isim:"false",
  });
  const [isValid,setIsValid]=useState(false);


  useEffect(() => {
    if(
      formVeri.isim.trim().length >= 3 &&
      formVeri.boyut && 
      formVeri.kalinlik && 
      formVeri.malzeme.length >= 4
    ){
      setIsValid(true)
    }
    else{
      setIsValid(false)
    }
  },[formVeri]);

 
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
        let yeniMalzemeler = [...formVeri.malzeme];

        if (checked) {
            if (yeniMalzemeler.length < 10 ) {
                yeniMalzemeler.push(value);
            }
        } else {
            yeniMalzemeler = yeniMalzemeler.filter((malzeme) => malzeme !== value);
        }

        setFormVeri({ ...formVeri, malzeme: yeniMalzemeler });

        if (yeniMalzemeler.length < 4) {
            setErrors({ ...errors, malzeme1: true });
        }else {
            setErrors({ ...errors, malzeme1 :false});
        }
    } else {
        setFormVeri({ ...formVeri, [name]: value });

        if (name === "isim") {
            setErrors({ ...errors, isim: value.trim().length < 3 });
        }
        if (name === "boyut") {
            setErrors({ ...errors, boyut: !value });
            // Eğer değer yoksa hata true olur
        }
        if (name === "kalinlik") {
            setErrors({ ...errors, kalinlik: !value });
        }
    }
};


  const history = useHistory();
  const handleOrderClick = (e) => {
    e.preventDefault();
    if (!isValid) return;
    const secimlerFiyat = formVeri.malzeme.length * 5;
  const toplamFiyat = (pizza.fiyat + secimlerFiyat) * adet;
  const yeniSiparis = {
    ...formVeri,
    secimler: `${secimlerFiyat}₺`,
    toplamFiyat: `${toplamFiyat}₺`
  };
    console.log("Gönderilen Sipariş Verisi:", yeniSiparis); 
    axios.post('https://reqres.in/api/pizza',yeniSiparis).then(response => {
      console.log('Sipariş Özeti:', response.data);
      setOrderData(yeniSiparis);
      Swal.fire({
        position: 'center',  
        icon: 'success',
        title: 'Siparişiniz oluşturuldu.',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        history.push('/success');  // Yönlendirme işlemi
      });
    }).catch(error => {
      //console.error("Sipariş gönderilirken bir hata oluştu:", error);
      if (error.response) {
      console.error("Yanıt hatası:", error.response.data);
    } else if (error.request) {
      console.error("İstek hatası, sunucu yanıt vermedi:", error.request);
    } else {
      console.error("Axios hatası:", error.message);
    }
    })


  };


  
  return (
    
    <>
    <header className="form-nav-header">
      <img src="/images/iteration-1-images/logo.svg" alt="Logo" className="header-img" />
    </header>
    <section className='pizza-details'>
     <img src="/images/iteration-2-images/pictures/form-banner.png"  />
     <Navbar />
     <div className='rating'>
        <h2 className='isim'>{pizza.pisim}</h2>
          <div className='degerlendirme my-3'>
            <h3 className='fiyat'>{pizza.fiyat}₺</h3> 
          <div className='derece'>
            <span className='puan'>{pizza.puan} ⭐</span>
            <span className='yorum'>({pizza.yorum})</span>
          </div>
            
          </div>
          <p className='aciklama'>{pizza.aciklama}</p>
     </div>
    </section>


    <section className='form-section'>
    <Form id="pizza-form" className="p-4">

      <Row className='boyutKalinlik py-3'>
  <Col   className='boyutSec'>
    <Label className='boyutLabel'>Boyut Seç <span className="onemli">*</span></Label>
    <div className="radio-buttons">
      {boyutlar.map((boyutSecenek, index) => (
        <FormGroup check key={index} className="radio-container">
          <Label check>
            <Input
              type="radio"
              name="boyut"
              value={boyutSecenek}
              data-cy="boyut"
              onChange={handleChange}
              checked={formVeri.boyut === boyutSecenek}
            />
            <span className={`radio-circle ${formVeri.boyut === boyutSecenek ? 'selected' : ''}`}>
              {boyutSecenek}
            </span>
          </Label>
        </FormGroup>
      ))}
       
    </div>
    { errors.boyut  && (
    <div className="text-danger mt-2 text-start">
      <i className="fa-solid fa-circle-info fa-lg"></i>
      {mesajlar.boyut}
    </div>)}
  </Col>

  <Col   className='hamurKalinlik'>
  <Label className='hamurLabel' for="kalinlik" >Hamur Seç  <span className="onemli">*</span></Label>
  <Input  type="select" name="kalinlik" data-cy="kalinlik" 
  onChange={handleChange}

  >
    <option value="" >--Hamur Kalınlığı Seç --</option>
    <option value="Kalın">Kalın</option>
    <option value="İnce">İnce</option>
  </Input>
  {errors.kalinlik  && (
    <div className="text-danger text-start mt-2">
      <i className="fa-solid fa-circle-info fa-lg"></i>
      {mesajlar.kalinlik}
    </div>
  )}
</Col>
</Row>
<Row className='pt-5  '>
    <Col className='malzemeBaslik'>
    <h5>Ek Malzemeler</h5>
<p>En Fazla 10 malzeme seçebilirsiniz. 5₺ ({formVeri.malzeme.length})</p>
    </Col>

</Row>

<Row className="ekMalzeme py-4">
  {pizza.malzemeler.map((malzeme, index) => (
    <Col key={index} md={4} sm={6} xs={12} className="checkbox-col">
      <FormGroup check className="d-flex align-items-center">
      <Input 
          type="checkbox" 
          name="malzeme"
          value={malzeme}
          className="checkbox-input"
          onChange={handleChange}
          checked={formVeri.malzeme.includes(malzeme)}
          disabled={formVeri.malzeme.length >= 10 && !formVeri.malzeme.includes(malzeme)}
          data-cy="cb"
        />
        <Label check className="checkbox-label" for="malzeme">{malzeme}</Label>
      </FormGroup>
    </Col>
  ))}
 {(errors.malzeme1 ) && (
    <div className="text-danger text-start mt-2">
      <i className="fa-solid fa-circle-info fa-lg"></i>
      {mesajlar.malzeme1 }
    </div>
  )}
</Row>

<Row className="siparis-form py-3">
  <Col className="siparis-form-col">
    <Label for="isim">İsim  <span className="onemli">*</span></Label>
    <Input 
      type="text" 
      id="isim"
      name='isim'
      placeholder="Adınızı girin" 
      minLength={3} 
      required 
      onChange={handleChange}
      data-cy="isim-input"
    />
     {(errors.isim) && (
    <div data-cy="err-ad" className="text-danger mt-2">
      <i className="fa-solid fa-circle-info fa-lg"></i>
      {mesajlar.isim}
    </div>
  )}
    <Label for="siparisNotu">Sipariş Notu</Label>
    <Input 
      type="textarea" 
      id="siparisNotu"
      name='siparisNotu' 
      placeholder="Siparişine eklemek istediğin bir not var mı?" 
      onChange={handleChange}
    />
  </Col>

  
</Row>

    <hr className='order-hr'></hr>

    <Row className="mt-3 siparis-container">
  <Col  className="adet-kontrol ">
    <Button id="arttir" onClick={() => setAdet(q => Math.max(1, q - 1))}>-</Button>
    <span className="adet">{adet}</span>
    <Button id="azalt" onClick={() => setAdet(q => q + 1)}>+</Button>
  </Col>

  <Col>
  <Card
    body
   
  >
    <CardTitle tag="h5">
        Sipariş Toplamı
    </CardTitle>
    <CardText>
  <div className='secimler' >Seçimler: <span name="secimler"  onClick={handleOrderClick} >{formVeri.malzeme.length * 5}₺</span></div>
  <div className='toplam'>Toplam: <span name="fiyat"  onClick={handleOrderClick} >{(pizza.fiyat + formVeri.malzeme.length * 5) * adet}₺</span></div>
</CardText>
  </Card>
  <Button className='siparis-ver' data-cy="siparis-btn" onClick={handleOrderClick} disabled={!isValid}>
    SİPARİŞ VER
    </Button>
  </Col>
</Row>
    </Form>
    </section>
    
    </>
  );
}

export default FormComponent;
