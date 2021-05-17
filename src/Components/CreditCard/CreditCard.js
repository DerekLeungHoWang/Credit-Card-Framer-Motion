import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MyCard, ChipLogo, VisaLogo, CardText, Earth, CardTextContainer, CardNumberContainer, ExpDateContainer, EarthContainer } from './Styles'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactComponent as earth } from '../../Assets/Images/earth.svg'


const container = {
  hidden: {
    y: '-100vh' 
  
  },
  show: {
  
     y: 0,
    transition: {
      type: 'spring',
      duration:1

    }
  }
}
const cardNumber = {
  hidden: { y: '100px', opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: .5

    }
  },
  exit: {
    opacity: 0,
    y: '-10px'
    ,
    transition: {
      type: 'tween',
      duration: 0.5

    }
  }
}


function CreditCard(props) {
  
  const { number , neededHash , name, focusCVC} = props
 console.log(props);
        let str=[]
              for(let i = 0;i<neededHash;i++){    
                 
                  str.push('#')
 
           }
          str = str.join("").replace(/(.{4})/g, " $1").trim()

  return (
    <MyCard 

    >
      <Earth />
      <ChipLogo />

      <CardNumberContainer
      >
        <AnimatePresence   >
          {number.replace(/ /g,'').split("").map((char, index) => {
             
             // let res =   index % 4 == 0 ? ' ' + char : char).join('').trim()
            return (
              <motion.div
                key={index}
                variants={cardNumber}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {(index+1)%4==0 ? char+'\xa0\xa0\xa0\xa0'   :char  
                
                
                } 
            
              </motion.div>
 
            )
          }) }
            
        </AnimatePresence>
          
      </CardNumberContainer>

      <ExpDateContainer>
        <div style={{ fontSize: "13px", padding: "13px 5px" }}>
          <h3>Exp Date - </h3>
        </div>
        <div>
      05/22
    </div>

      </ExpDateContainer>
      <CardText>{name}</CardText>
      <VisaLogo />
      {/* <EarthContainer> */}


    </MyCard>

  )
}


export default CreditCard
{/* <ChipLogo />
<CardTextContainer>
  <CardNumberContainer>
    <CardText>0000</CardText>
    <CardText>0000</CardText>
    <CardText>0000</CardText>
    <CardText>0000</CardText>
  </CardNumberContainer>
  <ExpDateContainer>
    <div style={{ fontSize: "8px", padding: "13px 5px" }}>
      <div>VALID</div>
      <div>THUR</div>
    </div>
    <div>
      08/23
    </div>

  </ExpDateContainer>
  <CardText>Derek Leung</CardText>
</CardTextContainer>
<Earth />
<VisaLogo /> */}