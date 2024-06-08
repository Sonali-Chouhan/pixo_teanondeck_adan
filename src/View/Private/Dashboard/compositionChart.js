import React from 'react';
import Chart from 'react-apexcharts'

const CompositionChart =()=>{
    return (
      <Chart 
      options={{
        labels:['Females', 'Male'],
        title:{
           text:"",
        },
        plotOptions:{
        pie:{
           donut:{
               labels:{
                   show:false,
                   total:{
                       show:true,
                       showAlways:true,
                       fontSize:30,
                       color: '#f90000',
                   }
               }
           }
        }
        },
        dataLabels:{
           enabled:true,
        }
       }}
        series={[35,65]}
        labels= {['Females', 'Male']}
        type="donut" width="300"
      />
    );
}

export default CompositionChart;