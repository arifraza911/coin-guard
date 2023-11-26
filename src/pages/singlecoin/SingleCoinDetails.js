import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TagIcon from '@mui/icons-material/Tag';
import { BarChartOutlined, CopyrightOutlined, EnhancedEncryption, GitHub, LanguageRounded,  } from '@mui/icons-material';

import style from './SingleCoin.module.css'
const SingleCoinDetails = () => {

    const [singleCoin, setsingleCoin] = useState()
    const {id}  = useParams()
  
    const fetchSingleCoin =  async ()=>{
    const {data} =  await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`)
    setsingleCoin(data)
    }
   
  
    useEffect(() => {
      fetchSingleCoin()
      //  eslint-disable-next-lin
        }, [])
  
    
    // console.log(id)
    // console.log(singleCoin)
  return (
    <div className='w-100 container '>
       <div className='flex flex-col justify-center items-center '>
       <img className='w-36 pb-3' src={singleCoin?.image?.large} alt="" />
       <h1 className='text-4xl'>{singleCoin?.name}</h1>
       </div>


       <div className={style.main}>
        <span className={style.ranking} >
         
            <span className='text-1xl hover:bg-white border-b  font-semibold text-gray-900 font-sans py-4  flex   justify-between w-100'><span> <TagIcon/> Rank :</span  > <span   >{singleCoin?.market_cap_rank}</span></span>
            <span className='text-1xl hover:bg-white border-b font-semibold text-gray-900 font-sans py-4 flex justify-between w-100 '> <span  > <MonetizationOnOutlinedIcon/>  Price : </span> {` ₹  ${singleCoin?.market_data?.current_price?.inr}`}</span>
            <span className='text-1xl hover:bg-white border-b font-semibold text-gray-900 font-sans py-4 flex justify-between w-100 '><span> <BarChartOutlined/> Market Cap Price :</span> {` ${singleCoin?.market_data?.market_cap?.usd} $`}</span>
            <span className='text-1xl font-semibold border-b hover:bg-white  text-gray-900 font-sans py-4 flex justify-between w-100 '><span> <CopyrightOutlined/> Origin Date :</span >  {` ${singleCoin?.genesis_date} `}</span>
            <span className='text-1xl font-semibold border-b text-gray-900 hover:bg-white  font-sans py-4 flex justify-between w-100 '><span> <CopyrightOutlined/> Circulating  Supply  :</span >  {` ${singleCoin?.market_data?.circulating_supply.toFixed(0)} M  `}</span>
            
        </span>

        <div className={style.description} >
           <h2 className='text-gray-900 text-2xl p-4' >About : {singleCoin?.name} </h2>
           <span className='text-1xl font-semibold text-gray-800' >  <dangerouslySetInnerHTML>{singleCoin?.description.en.split(".")[0]}</dangerouslySetInnerHTML>   </span>
           <h4 className='mt-4'>Links :</h4>

            <span className='text-1xl font-semibold border-b text-gray-900 hover:bg-white  font-sans py-4 flex justify-between w-100 '><span> <LanguageRounded color='red'/>  Website   :</span > <a href={singleCoin?.links?.homepage[0]}>  {singleCoin?.links?.homepage[0] ? singleCoin?.links?.homepage[0] : "NA" } </a> </span>
            <span className='text-1xl font-semibold border-b text-gray-900 hover:bg-white  font-sans py-4 flex justify-between w-100 '><span> <GitHub color='red'/>  Github   :</span > <a href={singleCoin?.links.repos_url?.github[0]} > {singleCoin?.links.repos_url?.github[0]? singleCoin?.links.repos_url?.github[0] : "NA"}  </a> </span> 
            <span className='text-1xl font-semibold border-b text-gray-900 hover:bg-white  font-sans py-4 flex justify-between w-100 '><span> <EnhancedEncryption color='red'/>  Blockchain   :</span > <a href={singleCoin?.links.blockchain_site[0]}> {singleCoin?.links.blockchain_site[0]? singleCoin?.links.blockchain_site[0] : "Na"} </a> </span>  

        </div>
       </div>
    </div>
  )
}

export default SingleCoinDetails