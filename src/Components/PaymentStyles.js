import styled from 'styled-components'

import { motion } from 'framer-motion';

export const PaymentContainer = styled(motion.div)`
 
display:flex;
  
align-items: center;
justify-content: center;
background-color:white;
 height:100%;
width:100%;
   flex-direction:column;
 `;

// export const CreditCardWrapper = styled(motion.div)`
 
//  padding: 10px;
//   background: white;
//   box-sizing: border-box;
//   resize: horizontal;
//   border: 1px dashed;
//   overflow: auto;
//   max-width: 100%;
//   height: calc(100vh - 16px);
   
//  `;