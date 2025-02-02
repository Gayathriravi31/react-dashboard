import React from 'react';
import FrequentlyCard from '../../UI/FrequentlyCard/FrequentlyCard';
import OrderDetailsCard from '../../UI/OrderDetailsCard/OrderDetailsCard';
import calendarIcon from '../../Assets/calendar.png';
import './rightPanel.css';
import CountDataCard from '../../UI/CountDataCard/CountCard';



const RightPanel = () => {
  return (
    <div>
      <FrequentlyCard />
      <div className='filter_flex'>
        <div className='common_select'>
          <select>
            <option value="all branches">all branches</option>
          </select>
        </div>
        <div className='filter_flex_right'>
          <div className='common_select'>
            <select>
              <option value="custom range">custom range</option>
            </select>
          </div>
          <div className='calendar_flex'>
            <span>March</span>
            <span>2020</span>
            <span className='calendar_box'>
              <img src={calendarIcon} alt='calendar icon' className='calendar_icon' />
            </span>
          </div>
        </div>
      </div>
      <OrderDetailsCard />
      <CountDataCard />
    </div>
  )
}

export default RightPanel
