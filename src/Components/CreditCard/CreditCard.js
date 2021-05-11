import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MyCard, ChipLogo, VisaLogo, CardText, Earth, CardTextContainer, CardNumberContainer, ExpDateContainer, EarthContainer } from './Styles'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactComponent as earth } from '../../Assets/Images/earth.svg'


const container = {
  hidden: {
    // y: '-100vh' 
    opacity: 0
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      type: 'spring',
      duration: 3

    }
  }
}
const cardNumber = {
  hidden: { y: '3vh' },
  show: {
    y: 0,
    transition: {
      type: 'spring',
      duration: .5

    }
  },
  exit: {
    y: '100vh',
    transition: {
      type: 'spring',
      duration: .5

    }
  }
}


function CreditCard(props) {
  const { number } = props

  //number &&  number.match(/.{1,4}/g).join(' ')

  return (
    <MyCard variants={container}
      initial="hidden"
      animate="show"

    >
      <Earth />
      <ChipLogo />

      <CardNumberContainer
      >
        <AnimatePresence   >
          {number.split("").map((char, index) => {
            return (
              <motion.div
                key={index}
                variants={cardNumber}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {char}
              </motion.div>

            )
          })}
        </AnimatePresence>
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