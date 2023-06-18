import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


const Chart = () => {
    const data = [
  {
    name: "Jan",
    uv: 0,
    pv: 0,
    amt: 2400
  },
  {
    name: "Feb",
    uv: 7,
    pv: 5,
    amt: 2210
  },
  {
    name: "Mar",
    uv: 5,
    pv: 8,
    amt: 2290
  },
  {
    name: "Apr",
    uv: 17,
    pv: 12,
    amt: 2000
  },
  {
    name: "May",
    uv: 23,
    pv: 17,
    amt: 2181
  },
  {
    name: "June",
    uv: 15,
    pv: 12,
    amt: 2500
  },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
];
  return (
//       <ResponsiveContainer>
//           <AreaChart width={730} height={250} data={data}
//   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//   <defs>
//     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
//       <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
//     </linearGradient>
//     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
//       <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
//     </linearGradient>
//   </defs>
//   <XAxis dataKey="name" />
//   <YAxis />
//   <CartesianGrid strokeDasharray="3 3" />
//   <Tooltip />
//   <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
//   <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
// </AreaChart>
//     </ResponsiveContainer>
     
    //   <AreaChart
    //   width={500}
    //   height={400}
    //   data={data}
    //   margin={{
    //     top: 10,
    //     right: 30,
    //     left: 0,
    //     bottom: 0
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    // </AreaChart>
  <div className='z-[999] '>
     <ResponsiveContainer width="100%"  height={300}>
           <AreaChart width={500} height={250} data={data}
  margin={{ top: 15, right: 5, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#de2a87" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#de2a87" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#e09512" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#e09512" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={0.5} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>  
  </div>
     
     
  )
}

export default Chart