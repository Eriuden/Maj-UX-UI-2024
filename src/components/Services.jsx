import React from 'react'
import { service1 } from '../assets'
import { Heading } from './Heading'
import { Section } from './Section'

export const Services = () => {
  return (
    <Section id="how-to-use">
        <div className='container'>
            <Heading title="Generation par l'IA pour les créateurs" 
            text="Débloquez le potentiel des applications fonctionnant avec l'IA" 
            />
            <div className='relative'>
                <div className='relative z-1 flex items-center
                h-[39rem] mb-5 p-8 border border-n-1/10 
                rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                    <div>
                        <img src={service1} />
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}
