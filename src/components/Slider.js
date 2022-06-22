import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
export const Slider = (props) =>{ 

    return(
        <Carousel>
  <Carousel.Item interval={10000}>
    <img
      className="d-block imgSlider"
      src="img/slides/slide1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Анонс на следующую поставку</h3>
      <p>Коровий:<br/><br/>
- Халлуми гриль корова
- Гауда корова
- Манчего
- Маасдам
- Пармезан молодой 12 мес 
- Качокавалло
- Орех коза/корова
- Страчателла
- Буррата
- Моцарелла
- Белпер кнолле перец
- Белпер кнолле паприка
- Сулугуни сливочный
- Риккота<br/><br/>

- Менажницы (Гауда , козий, качотта орех, Манчего , копчёный) <br/><br/>

Коза (100%):<br/><br/>
- Халлуми козий
- Белпер кнолле козий
- Козий маасдам
- Каприно</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block imgSlider"
      src="img/slides/slide2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Предстоящие события</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block imgSlider"
      src="img/slides/slide3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Новости</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}