import React, {useState} from 'react'
import styled from 'styled-components'
import logo from "./img/logo.svg"
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [status,setStatus] = useState(false)
    return (
        <div>
            <Container>
                <a href=""><img src={logo} alt="" /></a>
                <Menu>
                    <a href="#">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panels</a>
                </Menu>

                <RightMenu>
                    <span>
                        <a href="#">Shop</a>
                        <a href="#">Account</a>
                    </span>
                    <a onClick={() => setStatus(!status)}>Menu</a>
                </RightMenu>

                <BurgerNav show={status}> 
                    <CloseWrapper>
                        <CustomClose onClick={() => setStatus(!status)}/>

                    </CloseWrapper>

                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">Cyber-Truck</a></li>
                    <li><a href="#">Roadaster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Power</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Investor Relationships</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                </BurgerNav>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    position:fixed;
    z-index: 1;
    display:flex;
    width: 98%;
    justify-content: space-between;
    margin: 18px 20px;
    img{
        width: 120px;
        height: 15px;
        padding-left: 20px;
    }
    @media (max-width:760px){
        img{
            margin-top: 6px;
            padding-left:4px;
        }
    }

`

const Menu = styled.div`
    flex: 1;

    align-items:center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    a{
        padding: 6px 16px;
        

       
    }   
    a:hover{
        background:rgb(102, 99, 99, 0.3);
        border-radius: 12px;
        transition: 0.5s;
    }
    @media (max-width:760px){
        display:none
    }
`

const RightMenu = styled.div`
   margin-right: 20px;
    a{   
        padding: 6px 16px;
    }
    a:hover{
        background:rgb(102, 99, 99, 0.3);
        border-radius: 12px;
        transition: 0.5s;
        cursor:pointer;
        
    }
    @media (max-width:760px){
        background:rgb(102, 99, 99, 0.3);
        padding: 2.5px 0;
        border-radius: 12px;
        transition: 0.5s;
        cursor:pointer;
        span{
            display:none;
        }
        a:hover{
            background:none;
            
        }
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    width:230px;
    background:white;
    display:flex;
    padding: 27px 30px;
    flex-direction:column;
    list-style:none;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    text-align:start;
    justify-content:space-between;
    li{
        margin-bottom: 10px;      
        padding: 5px 10px;
        cursor:pointer;
        
        a{
            font-weight: 600;
            
        }
    };

    li:hover{
        background:rgb(102, 99, 99, 0.2);
        border-radius: 10px;
        transition: 0.5s;
    }
    
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    
`