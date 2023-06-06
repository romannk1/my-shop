import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel>
      
    <Carousel.Item interval={1200}>
      <img width={'100%'} height={450}
        className="d-block w-60"
        src="./img/first.jpg"
        alt="First slide"
      />
      
      <Carousel.Caption>
        <div className='slider1'>
          <h3>Новинки канцелярии!</h3>
          <p>Бесплатная доставка в пункты самовывоза при заказе от 1000 рублей!</p>
          </div>
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>
      </Carousel.Caption>
      
    </Carousel.Item>
    <Carousel.Item interval={1200}>
      <img width={'100%'} height={450}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      
      <Carousel.Caption>
      <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>
      </Carousel.Caption>
         
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={450}
        className="d-block w-100"
        src="./img/three.jpg"
        alt="Third slide"
      />
      
      <Carousel.Caption>
          <div className='slader2' >
            <h3>Создаём авокадное настроение!</h3>
            <p>Самые сочные авокадо для Вас!</p>
          </div>
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>
      </Carousel.Caption>
      
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider