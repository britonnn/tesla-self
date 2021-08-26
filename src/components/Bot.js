import React from 'react'
import { $CombinedState } from 'redux'
import styled from 'styled-components'
import da from './img/down-arrow.svg'



function Section({title, img, desc, leftBtnText, rightBtnText}) {
    return (
        <Wrapper bg={img}>
            <TextItem>
               
            <h1>{title}</h1>
            <p>{desc}</p>  
             
                      
                
                
                    
               
            </TextItem>
            <Buttons>
                <ButtonGroup>
                   
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                   
                    
                        {rightBtnText &&
                            <RightButton>
                            {rightBtnText}
                            </RightButton>
                        
                        }
                        
                   
                </ButtonGroup>
               
                <DownArrow src={da}></DownArrow>
               
            </Buttons>
        </Wrapper>
    )
}

export default Section

const Wrapper = styled.div`
    background-image: ${props => `url('${props.bg}')`};
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-size:cover;
    background-repeat:none;
    background-position:center;
    width: 100vw;
    align-items:center;
    scroll-snap-align: start;
   
`

const TextItem = styled.div`
    margin-top: 16.5vh;
    text-align:center;
    h1{
        font-size:40px;
        font-weight: 800;
    }
    span{
        
        border-bottom: 1px solid #393c41;
    }
    span:hover{
        color:black;
        cursor:pointer;
        border-bottom: 2px solid black;
        text-decoration:none;
        
    }
`
const Buttons = styled.div`
    margin-bottom: 10px;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    
    @media (max-width: 760px){
        flex-direction:column;
        margin-bottom: 20px;
    }
`
const LeftButton = styled.div`
    justify-content:center;
    width: 260px;
    height: 43px;
    font-weight:bolder;
    color:white;
    background: black;
    margin: 0 10px;
    border-radius: 100px;
    display:flex;
    align-items:center;
    font-size: 13px;
   
    cursor:pointer;
    text-transform: uppercase;
    opacity: 0.9;
    @media (max-width: 760px){
        width: 400px;
        height: 40px;
        margin-top:16px
       
    }
`
const RightButton = styled(LeftButton)`
    background:white;   
    color: #393c41;
`

const DownArrow = styled.img`
    height:40px;
    animation: ArrowDown infinite 1.5s;
    visibility:hidden;

`