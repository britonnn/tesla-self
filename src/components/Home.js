import React from 'react'
import Section from './Section'
import styled from 'styled-components'
import modelS from './img/model-s.jpg'
import modelY from './img/model-y.jpg'
import modelX from './img/model-x.jpg'
import model3 from './img/model-3.jpg'
import sp from './img/solar-panel.jpg'
import sr from './img/solar-roof.jpg'
import a from './img/accessories.jpg'
import Section1 from './Section1'
import First from './First'
import Bot from './Bot'

function Home() {
    return (
        <Container>
            <First 
                
                title='Model S'
                
                img={modelS}
                leftBtnText="CUSTOM ORDER"
                rightBtnText='EXISTING INVENTORY'
            />
             <Section1 
                title='Model Y'
                img={modelY}
                
                leftBtnText="CUSTOM ORDER"
                rightBtnText='EXISTING INVENTORY'
            />

           <Section1 
                title='Model 3'
                
                img={model3}
                leftBtnText="CUSTOM ORDER"
                rightBtnText='EXISTING INVENTORY'
            />
            <Section1 
                title='Model X'
                img={modelX}
                
                leftBtnText="CUSTOM ORDER"
                rightBtnText='EXISTING INVENTORY'
            />
           
            <Section 
                title='Solar Panels'
                desc='Lowest Cost Solar Panels in America'
                img={sp}
                leftBtnText="Order Now"
                rightBtnText='Learn More'
            />
            <Section 
                desc='Produce Clean Energy From Your Roof'
                title='Solar Roof'
                img={sr}
                leftBtnText="Order Now"
                rightBtnText='Learn More'
            />
            <Bot 
                desc=''
                title='Accessories'
                img={a}
                leftBtnText="Shop Now"
                
            />
        </Container>
    )
}

export default Home

const Container= styled.div`
    overflow-x:hidden;
    height:100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
`