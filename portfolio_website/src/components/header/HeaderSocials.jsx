import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/andre-moraes-rau-a54419233/" target="__blank"><BsLinkedin /></a>
        <a href="https://github.com/AndreMoraesRau" target="__blank"><FaGithub /></a>
        <a href="https://www.instagram.com/andre.m.rau/" target="__blank"><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials