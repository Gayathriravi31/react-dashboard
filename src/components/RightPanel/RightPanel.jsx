import React from 'react';
import FrequentlyCard from '../../UI/FrequentlyCard/FrequentlyCard';
import OrderDetailsCard from '../../UI/OrderDetailsCard/OrderDetailsCard';
import './rightPanel.css';


const RightPanel = () => {
  return (
    <div>
      <FrequentlyCard />
      <div className='filter_flex'>
        <select className='common_select'>
          <option value="all branches">all branches</option>
        </select>
        <div className='filter_flex_right'>
          <select className='common_select'>
            <option value="custom range">custom range</option>
          </select>
          <div className='calendar_flex'>
            <span>March</span>
            <span>2020</span>
            <span className='calendar_box'>
              {/* <img src='' alt='calendar icon'/> */}
            </span>
          </div>
        </div>
      </div>
      <OrderDetailsCard/>
    </div>
  )
}

export default RightPanel
