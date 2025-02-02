import React from 'react';
import './frequentlyCard.css';

const FrequentlyCard = () => {
  return (
    <div className='frequently_container common_shadow'>
        <h3 className='common_header_h3 mb-15'>Frequently Used</h3>
        <div className='frequently_card_grid'>
          {
            [1, 2, 3].map((data) => {
              return (
                <div className='frequently_card' key={data}>
                  <h4 className='frequently_card_header'>Contact Execution Upload</h4>
                  <p className='frequently_card_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a className='frequently_card_link' href='/'>
                   <span>Get started</span>
                  <span>{'>>'}</span>
                  </a>
                </div>
              )
            })
          }
        </div>

      </div>
  )
}

export default FrequentlyCard
