import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,  } from 'react-router-dom'
import HistoryChart from './HistoryChart'
import SingleCoinDetails from './SingleCoinDetails'
import style from './SingleCoin.module.css'

const SingleCoin = () => {
  
  return (
 
    <>
    {/* <div>SingleCoin</div> */}

    <div className={style.header} >

    <SingleCoinDetails/>
    <HistoryChart/>


    </div>
    
     
    </>
  )
}

export default SingleCoin