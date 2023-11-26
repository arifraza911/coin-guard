import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import {  useNavigate } from "react-router-dom";

const TrendingCoin = () => {

const navigate =   useNavigate()
  const [trending, settrending] = useState([]);

  const fetchTredning = async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
    );
    settrending(data);
  };

  useEffect(() => {
    fetchTredning();
  }, []);

  // console.log(trending);

  return (
    <div style={{backgroundColor:"#F0F2F5"}} >
      <div  className="w-100  h-100  px-3">
        <h3 className="text-4xl text-center  py-5 ">Trending Coins </h3>
        <div >
          <div className="row">
              {trending.map((elm)=> { 

                const profit = elm.price_change_percentage_24h>0

                return (
                <div  key={elm.id}  onClick={()=>{ {window.scrollTo(0,0)} navigate(`/coin/${elm.id}`)}} className="col-lg-3 py-2  cursor-pointer">
                <Card className="pb-3 hover:drop-shadow-lg 1 border-0 " >
                 <Card.Body className="flex justify-between align-items-center   ">
                 <Card.Title  >{elm.name}</Card.Title>
                 <img style={{width:"3rem"}} src={elm.image} alt={elm.id} />
                  </Card.Body> 

                  <Card.Body>
                    <Card.Text > Price : ₹ {elm.current_price}</Card.Text>
                     <Card.Text>Market Rank : {elm.market_cap_rank}</Card.Text>
                     <Card.Text>Market Cap  : {elm.market_cap}</Card.Text>
                      <Card.Text>Daily Change  :  <span className={profit ? "text-green-400 fw-semibold "  : "text-red-700 fw-semibold"}> {profit?"+":""} {elm.price_change_percentage_24h} </span>  </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              )})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCoin;
