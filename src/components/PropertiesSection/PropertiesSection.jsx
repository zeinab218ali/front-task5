import Hero from '../Hero/Hero'
import './PropertiesSection.css'
import CardKm from '../Card/CardKm'
const PropertiesSection = () => {
    return (
        <div className='PropertiesSection-container'>
            <Hero sp='| PROPERTIES' H3='We Provide The Best Property You Like'/>
            <div className="vilaa-cards">
                <CardKm photo='./property-01.jpg' name='Luxury Villa' salary='$2.264.000'
                 desc='18 New Street Miami, OR 97219' num1='8' num2='8' num3='545m2' num4='3' num5='6 spots'  />
                <CardKm photo='./property-02.jpg' name='Luxury Villa' salary='$1.180.000'
                 desc='54 Mid Street Florida, OR 27001' num1='6' num2='5' num3='450m2' num4='3' num5='8 spots'  />
                <CardKm photo='./property-03.jpg' name='Luxury Villa' salary='$1.460.000'
                 desc='26 Old Street Miami, OR 38540' num1='5' num2='4' num3='225m2' num4='3' num5='10 spots'  />
                <CardKm photo='./property-04.jpg' name='Apartment' salary='$584.500'
                 desc='12 New Street Miami, OR 12650' num1='4' num2='3' num3='125m2' num4=' 25th' num5=' 2 cars'  />
                <CardKm photo='./property-05.jpg' name='Penthouse' salary='$925.600'
                 desc='34 Beach Street Miami, OR 42680' num1='4' num2='4' num3='180m2' num4='38th' num5='2 cars'  />
                <CardKm photo='./property-06.jpg' name='Modern Condo' salary='$450.000'
                 desc='22 New Street Portland, OR 16540' num1='3' num2='2' num3='165m2' num4='26th' num5='3 cars'  />
            </div>
        </div>
    )
}

export default PropertiesSection