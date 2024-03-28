import { curve } from "../assets"
import { Button } from "./Button"
import { Section } from "./Section"

export const Hero = () => {
  return (
    <Section className="pt-[12rem] -mt-[5.25]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPadding
    id="hero"
    >
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto
            text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
                <h1 className="h1 mb-6">Explorez les possibilités de l'IA</h1>
                <img src={curve} 
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624} height={28} alt="Curve"
                />
                <p className="body-1 max-w-3xl mx-auto mb-6
                text-n-2 lg:mb-8">
                    Le pouvoir de l'IA à portée de main
                </p>
                <Button>
                    
                </Button>
            </div> 
        </div>
    </Section>
  )
}
