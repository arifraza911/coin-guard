import React from 'react'
import TrendingCoin from './TrendingCoin'
import Title from '../../components/header/Title'
import Footer from '../../components/Footer'
import FAQ from '../../components/FAQ'
import GlobalCryptoStats from '../../components/GlobalCryptoStats'

 
const CoinList = () => {
  return (
  <>


          <Title/>

  <div style={{backgroundColor:"#F0F2F5"}} className='w-100  py-7 '>
  
       <GlobalCryptoStats/>
      <TrendingCoin/>
   
      <FAQ/>
  </div>
      <Footer/>

  </>
  )
}

export default CoinList