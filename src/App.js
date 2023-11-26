

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinList from './pages/coinlist/CoinList';
import SingleCoin from './pages/singlecoin/SingleCoin';
import Header from './components/header/Header';
import Footer from './components/Footer';
import TotalCoin from './pages/coinlist/TotalCoin';
import './App.css';
import style from './components/Footer.module.css'
import SearchCoin from './pages/search/SearchCoin';
import CrypotHeadlines from './pages/crypot-news/CrypotHeadlines';
import CrypotCategories from './pages/category/CrypotCategories';

function App() {

  
    return (
        <div className='App'  >
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/'  Component={CoinList} />
      <Route path='/totalcoins'  Component={TotalCoin} />
      <Route path='/coin/:id' Component={SingleCoin} />
      <Route path='/search' Component={SearchCoin} />
      <Route path='/news' Component={CrypotHeadlines} />
      <Route path='/category' Component={CrypotCategories} />
     </Routes>

     {/* <Footer/> */}
     </BrowserRouter>
     </div>
    )
}

export default App;
