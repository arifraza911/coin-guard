import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const SearchCoin = () => {
  const [search, setsearch] = useState("");
  const [Searchdata, setSearchData] = useState([]);
  const [loader, setloader] = useState(false)
  const [firstNotifcation, setfirstNotifcation] = useState(true)
  const navigate = useNavigate();

  const fetchSearchCoin = async () => {
    setloader(true)
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${search}`
    );

    setsearch(" ")
    setSearchData(data.coins);
    setfirstNotifcation(false)
    setloader(false)
  };
  //    console.log(search)
  // console.log(Searchdata.length);




     
  return (
    <div style={{backgroundColor:"#F0F2F5"}} >
      <div>
        <h1 className="text-center text-2xl font-sans pt-3  px-1 ">
          Search For Crypto Currency
        </h1>

        <div className="flex justify-center align-content-center mt-4 py-2 px-4 ">
          <TextField
            style={{ width: "80%" }}
            id="filled-search"
            label="Search Currency"
            type="search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            // variant="filled"
          />

          <Button
            onClick={fetchSearchCoin}
            variant="contained"
            size="large"
            style={{ marginLeft: "1rem" }}
          >
            <SearchRoundedIcon />
          </Button>
        </div>

              {firstNotifcation && <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"2rem", height:"60vh"}} >  <h1 style={{color:"#1565C0"}} >Search Coin To Show...</h1> </div>}
               { !firstNotifcation  ? Searchdata.length===0  && <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"2rem", height:"60vh"}} >  <h1 style={{color:"#1565C0"}} >Coin not  found...😔</h1> </div> : " "}
    
        {/* show searched data */}
            
              {loader ? (<div style={{display:"flex", justifyContent:"center", margin:" auto", alignItems:"center"}}>
          
                       <Backdrop open={loader}  sx={{ color: '#fff',  zIndex: (theme) => theme.zIndex.drawer + 1 }}  >
                       <CircularProgress color="inherit" />
                       </Backdrop>
                            </div>)  :     (
                     <div className="row mx-4">
          {Searchdata.map((elm) => {
            return (
              <div
                key={elm.id}
                onClick={() => {
                  {{window.scrollTo(0,0 ,type="smooth")}}
                  navigate(`/coin/${elm.id}`);
                }}
                className="col-lg-3 col-md-6 py-2 px-1 cursor-pointer"
              >
                <Card className="pb-3 hover:drop-shadow-lg 1 border-0 ">
                  <Card.Body className="flex justify-between align-items-center "  >
                    <Card.Title>{elm.name}</Card.Title>
                    <img
                      style={{ width: "3rem" }}
                      src={elm.large}
                      alt={elm.id}
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text> Symbol : {elm.symbol}</Card.Text>
                    <Card.Text>Market Rank : {elm.market_cap_rank}</Card.Text>
                    <Card.Text>Coin Symbol: {elm.api_symbol}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
};

export default SearchCoin;
