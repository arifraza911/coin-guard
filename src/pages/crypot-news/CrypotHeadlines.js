
import axios from "axios";
import React, {  useState } from "react";
import { useEffect } from "react";
import {  Card } from "react-bootstrap";
import { Button } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const CrypotHeadlines = () => {

 
  const [headlines, setheadlines] = useState([]);
  const [showmore, setshowmore] = useState(false)


  
  const fetchHeadlines = async () => {
    // console.log(process.env.REACT_APP_KEY)
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=crypto&apikey=${process.env.REACT_APP_KEY}`
    );
    setheadlines(data.articles);
  }

  

  
  useEffect(()=>{
    fetchHeadlines()
   },[])



            const ShowTotalNews = 
                   headlines.slice(0,50).map((value)=>(
                <div style={{transition:"ease-in", }}  key={value.title} className="col-md-3 col-sm-2 col-lg-4  ">  
                   <Card className="p-lg-2"  >
                     <Card.Img variant="top" src={value.urlToImage}  className="h-50" alt={value.title}/>
                     <Card.Body>
                       <Card.Title>{value.title}</Card.Title>
                        <p>  Published By : " + {value.source.name}</p>
                        <p style={{padding:0}}> Published At :  {value.publishedAt}</p>
                     
                       <Card.Text>
                         {value.description}  
                       </Card.Text>
                         {/* <Button  onClick={()=> setIsOpen(!IsOpen)} variant="outlined">{!IsOpen ? "Read More " : "Read Less"}</Button> */}
                       <a href={value.url}><Button>Read More</Button></a>
                     </Card.Body>
                   </Card>
                
                </div>
                  ))


                  // console.log(ShowTotalNews)
            
  
      
       return (

         <div className="container" >
      <h1 className="mt-3 mb-5 ml-3  ">Top headlines</h1>

      <div>
         
        {/* <div className="container"> */}
          <div className="row  gap-y-4">
 

           { !showmore  ? headlines.slice(0,6).map((news)=>{
          return (

            <div style={{transition:"ease-in"}}  key={news.title}  className="col-md-3 col-sm-2 col-lg-4   ">  
            <Card  style={{ height:"80vh"}} >
              <Card.Img variant="top" src={news.urlToImage}  className="h-50" alt={news.title}/>
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                 <p>  Published By : " + {news.source.name}</p>
                 <p style={{padding:0}}> Published At :  {news.publishedAt}</p>
              
                <Card.Text>
                  {news.description}  
                </Card.Text>
                  {/* <Button  onClick={()=> setIsOpen(!IsOpen)} variant="outlined">{!IsOpen ? "Read More " : "Read Less"}</Button> */}
                <a href={news.url}><Button>Read More</Button></a>
              </Card.Body>
            </Card>
        
         </div>

          )
         }) : (

          <>
           
             {ShowTotalNews}
          </>
         )}



        
          </div>
        </div>


        <Button className="mt-3" onClick={()=>(setshowmore(!showmore))} >{!showmore ? <span style={{transition:"ease-in"}} > Show more   <ExpandMoreIcon/></span>   : <span style={{transition:"ease-in"}}  > Show Less <ExpandLessIcon/>  </span> }</Button>
      </div>
    // </div>
  );
};

export default CrypotHeadlines;


