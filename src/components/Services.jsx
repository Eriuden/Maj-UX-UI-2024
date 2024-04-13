import React from 'react'
import { service1 } from '../assets'
import { brainwaveServices } from '../constants'
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
                    <div className='absolute top-0 left-0 w-full h-full
                    pointer-events-none md:w-3.5 xl:w-auto'>
                        <img className='w-full h-full object-cover
                        md:object-right' width={800} alt="IA perfectionnée"
                        height={730} src={service1} 
                        />
                    </div>

                    <div className='relative z-1 max-w-[17rem]
                    ml-auto'>
                        <h4 className='h4 mb-4'>IA perfectionnée</h4>
                        <p className='body-2 mb-[3rem] text-n-3'>Débloquez le 
                        potentiel des applications fonctionnant avec l'IA
                        </p>
                        <ul className='body-2'>
                            {brainwaveServices.map((item,index) => (
                                <li key={index} className="flex items-start py-4
                                border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className='ml-4'>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}
