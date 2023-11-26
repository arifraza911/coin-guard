import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend,} from 'chart.js';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment/moment';
import style  from './HistoryChart.module.css'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const HistoryChart = () => {
  const [chart, setchart] = useState([])
  const {id} =  useParams();

  
  const fetchChartHistory = async ()=>{
          const {data} =   await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=7`)
          setchart(data.prices)
  } 
    // const coinChartData = data.map(value =>({x: value.prices[0], y: value.prices[1]}))
      // console.log(coinChartData)
  useEffect(()=>{
    fetchChartHistory()
  },[])


  const coinChartData = chart.map(value =>({x: value[0], y: value[1].toFixed(2)}))
      

       const options = {
        responsive: true,    
      };
      


      const data ={
        labels : coinChartData.map(value => moment(value.x).format('MMM Do YY')),
        datasets: [
          {
            fill: true,
            label : `Price Chart  : ${id}` ,
            data: coinChartData.map(value => value.y),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }

  // console.log(data)
  return (
   <div className={style.chart} >
   <Line   options={options} data={data} />
   </div>
  )
}

export default HistoryChart