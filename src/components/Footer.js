import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import style from './Footer.module.css'
// import { CDBFooter, div, div, div, CDBContainer } from 'cdbreact';
const Footer = () => {
  return (
    
    <>
    <div className={style.footer}  >
      <span className='text-white text-1xl' >CopyRight <CopyrightIcon/> 2023 <span className={style.title}>Coin Guard </span> </span>
      <span className='text-white'>All Right Reserve</span>
      <span></span>
      <span></span>
    </div>
    </>
  )
}

export default Footer