import React from 'react'
import { check2, grid, loading1 } from '../assets'
import { roadmap } from '../constants'
import { Heading } from './Heading'
import { Section } from './Section'
import { Tagline } from './Tagline'

export const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
        <div className='container md:pb-10'>
            <Heading tag="prêt à démarrer" title="Ce sur quoi nous travaillons"/>

            <div className='relative grid gap-6 md:grid-cols-2
            md:gap-4 md:pb-[7rem]'>
                {roadmap.map((item)=> {
                    const status = item.status === "done" ?
                    "Terminé" : "En production"

                    return (
                        <div key={item.id} 
                        className={`md:flex even:md:translate-y-[7rem] p-0.25
                        rounded-[2.5rem]`}>
                            <div className=''>
                                <div>
                                    <img src={grid} className="w-full"
                                    width={550} height={550} alt="Grid"/>
                                </div>

                                <div className='relative z-1'>
                                    <div className='flex items-center
                                    justify-between'>
                                        <Tagline>{item.date}</Tagline>

                                        <div>
                                            <img src={item.status === "done" ?
                                            check2 : loading1}
                                            className="mr-2.5"
                                            width={16} height={16}
                                            alt={status}
                                            />

                                            <div className='tagline'>
                                                {status}
                                            </div>
                                        </div>

                                        <div className='mb-10'>
                                            <img src={item.imageUrl}
                                            className="w-full" width={630}
                                            height={420} alt={item.title}
                                            />
                                        </div>

                                        <h4 className='h4 mb-4'>{item.title}</h4>
                                        <p className='body-2'>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    </Section>
  )
}
