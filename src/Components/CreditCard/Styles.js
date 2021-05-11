
import styled from 'styled-components'
import { ReactComponent as visaLogo } from '../../Assets/Images/visa.svg'
import { ReactComponent as chip } from '../../Assets/Images/chip.svg'
import { ReactComponent as earth } from '../../Assets/Images/earth.svg'
import image1 from '../../Assets/Images/image1.jpg'
import { motion } from 'framer-motion';

export const MyCard = styled(motion.div)`

position:absolute;
    height: 300px;
     width: 550px;
    border-radius:18px;
    border: 1px solid #000;
  background: linear-gradient(0.25turn, #7b4397  , #dc2430);
 
   position:relative;
   box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
     z-index:3;
   @media (max-width: 768px) {
     zoom: 0.7;
    -moz-transform: scale(0.5);
  }
 
 
 `;
export const Earth = styled(earth)`
position:absolute;
 width:100%;
 height:100%;
  opacity:0.4;
`
export const ChipLogo = styled(chip)`
     position:absolute;
     left:13%;
     top:28%;
     height: 5rem;
    width: 5rem;
    z-index: 5;
 

 `
export const CardNumberContainer = styled(motion.div)`
	position:absolute;
     left:13%;
     bottom:34%;
     color:white;
     font-weight:600;
     font-size:30px;
     display:flex;
     flex-direction:row;

`
export const EarthContainer = styled(motion.div)`
    z-index: 3;
  display: flex;
       

`

export const VisaLogo = styled(visaLogo)`
       position:absolute;
    right:25px;
    bottom:0px;
   height: 5rem;
    width: 5rem;
    z-index: 2;
   
`


export const CardTextContainer = styled(motion.div)`

        position:absolute;
     bottom:10px;
     left:30px;
     width:100%;
     z-index: 2;
`

export const CardText = styled(motion.p)`
      position:absolute;
      bottom:30px;
     left:30px;
 width:100%;
color: white;
font-size:30px;
font-family:Roboto;
font-weight:500;
margin-bottom:3px;
padding:0;
text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
 z-index: 2;
`


export const ExpDateContainer = styled(motion.div)`
     position:absolute;
     bottom:90px;
     left:15px;
     width:100%;
     font-weight:500;
	display: flex;
     flex-direction:row;
	color: #c4e0e5;
     align-items: center;
     justify-content:  center;
     margin-bottom:-30px;
     margin-left:-60px;
`

export const FormContainer = styled(motion.form)`
     background:white;
      width:60%;
      height:600px;
      border-radius:20px;
      border: 1px solid black;
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
 
  
`

