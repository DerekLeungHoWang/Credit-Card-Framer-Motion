import styled from 'styled-components'
import { motion } from 'framer-motion';


export const FlipCard = styled(motion.div)`
  background-color: transparent;
  width: 500px;
  height: 300px;
  perspective: 1000px;
  
  border-radius:18px;
  z-index:3;
`
export const FlipCardInner = styled(motion.div)`
 position: relative;
 top:90px;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
 // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 
 ${({ focusCVC }) => {
   console.log(focusCVC);
   
    return (focusCVC && `
     transform: rotateY(180deg);
  `)
  }
  }
   
 
   

 }
 

`

export const FlipCardFront = styled(motion.div)`
  background-color: #bbb;
  color: black;
    position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius:18px;
  z-index:3;
`

export const FlipCardBack = styled(motion.div)`
 background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
    position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius:18px;
  
`

