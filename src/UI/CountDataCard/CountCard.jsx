import React from 'react';
import './countDataCard.css';

const CountDataCard = () => {
    return (
        <div className='countdata_card_grid'>
            {
                ['E-sign Count', 'E-Stamp Count'].map((data, index) => {
                    return (
                        <div className='countdata_card common_shadow' key={index}>
                            <h3 className='countdata_card_header'>{data}</h3>
                            <div className='countdata_card_flex'>
                                <div className='status_grid'>
                                 {
                                    ['Intitated','Pending','Singed','Expried'].map((statusItem,index)=>{
                                        return(
                                            <div key={index} className='status_flex_item'>
                                                <span className='status_color_box'></span>
                                                <span>{statusItem}</span>
                                            </div>
                                        )
                                    })
                                 }
                                </div>
                                <div className='status_img_box'>
                                    {/* <img className='status_img' /> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CountDataCard
