import {
  CircularProgress,
  Pagination,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import { convertNumberToTrillionsOrQuadrillions } from "../../components/utils/number-converter";
const TotalCoin = () => {
  const [coins, setcoins] = useState([]);

  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState("");
 const navigate=   useNavigate()
  const fetchAllCoins = async () => {
    setloading(true);

    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    setcoins(data);
    setloading(false);
  };

  useEffect(() => {
    fetchAllCoins();
  }, [search]);

  // console.log(coins);
  // console.log(search);

  const searchHandler = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


 


  return (
    <div style={{backgroundColor:"#F0F2F5"}} >
      <div className=" items-center flex justify-center py-10">
        <TextField
          className="lg:w-96 "
          id="filled-search"
          label="Search Currency"
          type="search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          //   variant="filled"
        />
      </div>

      {loading ? (
        <CircularProgress
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "-50%,-50%",
          }}
          color="success"
        />
      ) : (
        <div className="px-4"  >
        <div className="row  " >

            {searchHandler && searchHandler.slice((page - 1) * 10, (page - 1) * 10 + 12).map((coin) => { 

              const profit = coin.price_change_percentage_24h>0

              return (

              <div  key={coin.id}  onClick={()=>{ {window.scrollTo(0,0)}  navigate(`/coin/${coin.id}`)}} className="col-lg-4 col-md-6 py-2 px-1  cursor-pointer ">
              <Card className="pb-3  hover:drop-shadow-lg 1 border-0 " >
               <Card.Body className="flex justify-between align-items-center">
               <Card.Title  >{coin.name}</Card.Title>
               <img style={{width:"3rem"}} src={coin.image} alt={coin.id} />
                </Card.Body> 

                <Card.Body>
                  <Card.Text > Price : ₹ {coin.current_price}</Card.Text>
                   <Card.Text>Market Rank : {coin.market_cap_rank}</Card.Text>
                   <Card.Text>Market Cap  : {coin.market_cap}</Card.Text>
                    <Card.Text>Daily Change  :  <span className={profit ? "text-green-400 fw-semibold "  : "text-red-700 fw-semibold"}> {profit?"+":""} {coin.price_change_percentage_24h} </span>  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            )})}
        </div>
      </div>
      )}

      { coins && page && (
        <Pagination
          onChange={(e, value) => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setpage(value);
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "1rem",
            fontSize: "2rem",
          }}
          count={coins.length / 10}
          shape="rounded"
            hideNextButton 
            hidePrevButton
        />
      )}
    </div>
  );
};

export default TotalCoin;


