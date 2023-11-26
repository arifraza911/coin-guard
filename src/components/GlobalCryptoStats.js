import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { convertNumberToTrillionsOrQuadrillions } from './utils/number-converter';
const GlobalCryptoStats = () => {

      const [globaldata, setglobaldata] = useState()

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/stats',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl'
    },
    headers: {
      'X-RapidAPI-Key': 'a7cc1a6640msh473c60d82a68e65p1628d3jsnab97f5008f2c',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
   
    const fetchGlobalCryptoStats = async ()=>{
            const response = await axios.request(options);
            setglobaldata(response.data)
    }
   
        useEffect(()=>{
            fetchGlobalCryptoStats()
        },[])
  



    //  number converter function

        
      
               const totalMarketCap = convertNumberToTrillionsOrQuadrillions(globaldata?.data?.totalMarketCap);
               const OneDayVol = convertNumberToTrillionsOrQuadrillions(globaldata?.data?.total24hVolume)
               const btcDominance = convertNumberToTrillionsOrQuadrillions(globaldata?.data?.btcDominance)
  return (
  <>




       <div className="heading font-serif text-2xl pt-3   pl-5 ">
        Global Crypto Stats
      </div>

    <div className="cryptstates flex align-content-between py-3 pl-7  ">
    <div className='w-50  ' >
<span className='flex flex-col py-3'>
<h4 className='text-sm pb-1' >Total Cryptocurrencies</h4>
<h4 className='text-1xl'>{globaldata?.data?.totalCoins}</h4>
</span>

<span className='flex flex-col py-3'>
<h4 className='text-sm pb-1 ' >Total Market Cap</h4>
<h4 className='text-1xl'>{totalMarketCap}</h4>
</span>
<span className='flex flex-col py-3'>
<h4 className='text-sm pb-1' >Total Exchange</h4>
<h4 className='text-1xl'>{globaldata?.data?.totalExchanges}</h4>
</span> 
</div>
         
         
 <div className='w-50 flex flex-col ' >
<span className='flex flex-col py-3'>
  <h4 className='text-sm pb-1' >Total Market </h4>
  <h4 className='text-1xl'>{globaldata?.data?.totalMarkets}</h4>
</span>

<span className='flex flex-col py-3'>
  <h4 className='text-sm pb-1' >Total 24 Hr Volume</h4>
  <h4 className='text-1xl'>{OneDayVol}</h4>
</span>
<span className='flex flex-col py-3'>
  <h4 className='text-sm pb-1' >btc Dominance</h4>
  <h4 className='text-1xl'>{btcDominance}</h4>
</span>
</div> 
      </div>
   
  </>
  )
}

export default GlobalCryptoStats

