import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel consectetur rerum ab facilis ex deleniti quam tempora nostrum. Asperiores ut natus eveniet doloremque assumenda molestiae saepe, adipisci a temporibus.'
  },
  {
    avatar: AVATAR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel consectetur rerum ab facilis ex deleniti quam tempora nostrum. Asperiores ut natus eveniet doloremque assumenda molestiae saepe, adipisci a temporibus.'
  },
  {
    avatar: AVATAR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel consectetur rerum ab facilis ex deleniti quam tempora nostrum. Asperiores ut natus eveniet doloremque assumenda molestiae saepe, adipisci a temporibus.'
  },
  {
    avatar: AVATAR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel consectetur rerum ab facilis ex deleniti quam tempora nostrum. Asperiores ut natus eveniet doloremque assumenda molestiae saepe, adipisci a temporibus.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials