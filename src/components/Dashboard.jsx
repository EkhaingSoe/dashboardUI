import React from 'react'
import '../style/Dashboard.css'
import First from './First'
import Second from './Second'
import Third from './Third'

const Dashboard = ({toggle}) => {
  return (
      <div  className={`${!toggle?"main-content":"moveDashboard "}   mt-20`}>
          <First />
          <Second />
          <Third/>
    </div>
  )
}

export default Dashboard