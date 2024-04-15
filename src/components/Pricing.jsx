import React from 'react'
import { smallSphere, stars } from '../assets'
import { LeftLine, RightLine } from './design/Pricing'
import { Heading } from './Heading'
import { PricingList } from './PricingList'
import { Section } from './Section'

export const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className='container relative z-2'>
        <div className='hidden relative justify-center mb-[6.5 rem]
        lg:flex'>
          <img src={smallSphere} className="relative z-1"
            width={255}
            height={255}
            alt="Sphère"
          />

          <div className='absolute top-1/2 left-1/2 w-[60rem]
          -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
            <img src={stars} className="w-full"
              width={950} height={400}
              alt="Etoiles"
            />
          </div>
        </div>

        <Heading 
          tag="Commencer avec l'IA" 
          title="Un seul paiement, utilisation à volonté"
        />

        <div className='relative'>
          <PricingList/>
          <LeftLine/>
          <RightLine/>
        </div>

        <div className='flex justify-center mt-10'>
          <a className='text-xs font-code font-bold 
          tracking-wider border-b'
          href='/pricing'>
            Tout les détails
          </a>
        </div>

      </div>
    </Section>
  )
}