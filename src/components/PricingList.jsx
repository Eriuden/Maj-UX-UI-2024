import React from 'react'
import { pricing } from '../constants'

export const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
        {pricing.map((item)=> (
            <div id={item.id}>
                <h4>{item.title}</h4>
            </div>          
        ))}
    </div>
  )
}
