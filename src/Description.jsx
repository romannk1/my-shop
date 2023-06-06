import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div>
    {}</div>
        
        <motion.div id='div1'

        initial={{
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2
        }}
        >Мы уверены, что вещи, которые вы используете ежедневно, должны вдохновлять и радовать глаз – именно так мы и формируем наш ассортимент.
         Дарите маленькие радости! </motion.div>

          <motion.div id='div2'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/banner-new.jpg'
            className='banner'
            width={850}

            initial={{
              opacity:0.5
            }}

            transition={{
              duration:5
            }}

            />

          </motion.div>
          

    </div>
  )
}

export default Description