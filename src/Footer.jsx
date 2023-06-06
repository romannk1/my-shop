import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-2 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-3'>
                <a>
                  <img src='img/logo1.jpg' className='bi me-2' width={220} height={100}>
                  </img>
                </a>
                
                <p class = "textFooter" >
                  Необычные аксессуары, стильная канцелярия.
                  Дарите больше маленьких радостей себе и близким.
                </p> 

              </div>
              <div className='col mb-3'>

              </div>
              <div className='col mb-4'>
                        <h5>ВСЕ УСЛУГИ</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Как сделать заказ</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Доставка товара</a>
                          </li>
                        </ul>
              </div>

              <div className='col mb-4'>
                        <h5>ПРОЧЕЕ</h5>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a className='nav-link p-0 text-muted'> Соглашение пользователя</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'> Правила интернет-торговли</a>
                          </li>
                        </ul>
              </div>
          
        </footer>
    </div>
  )
}

export default Footer