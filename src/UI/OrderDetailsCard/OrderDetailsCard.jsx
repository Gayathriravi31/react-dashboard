import React from 'react';
import './orderDetailsCard.css'

const OrderDetailsCard = () => {
  return (
    <div className='order_details_container'>
      <div className='order_details_card_header'>
        <h3 className='common_header_h3'>Order Details</h3>
        <a className='order_details_card_link' href='/'>view All</a>
      </div>
      <div className='order_details_card_grid'>
        {
          [1, 2, 3, 4].map((data) => {
            return (
              <div className='order_details_card' key={data}>
                <h4 className='order_details_header'>18</h4>
                <p className='total_text'>Total Orders</p>
                <div className='icon_flex'>
                  <span className='trading_icon_box'><img src='' className='trading_icon'alt='trading icon'  /></span>
                  <span>+24%</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default OrderDetailsCard
