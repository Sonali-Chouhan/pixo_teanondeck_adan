import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const MonthlyChart=()=> {

  const [data, setData]= useState({
    labels:["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets:[
      {
        label:"Leaves",
        data:[13, 12, 13, 14, 12, 13,13,12,14,15,11,13,18,0],
        backgroundColor:'#643FDB',
        borderColor:'#643FDB',
        fill:true,
        pointBorderColor:'black',
        pointBackgroundColor:'blue',
      } 
    ]
  })
  return (
      <Line data={data}></Line>
  );
}

export default MonthlyChart;