import React from 'react'
import PropTypes from 'prop-types'
import { FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, CardBackNameContainer ,CardBackCVCContainer, CardBackThank} from './TestStyles'
import CreditCard from '../CreditCard/CreditCard'
import image1 from '../../Assets/Images/image1.jpg'
const container = {
    hidden: {
        y: '-100vh'

    },
    show: {

        y: 0,
        transition: {
            type: 'spring',
            duration: 1

        }
    }
}
function Test(props) {
    const { focusCVC, name,cvc } = props
    return (
        <FlipCard
            variants={container}
            initial="hidden"
            animate="show"

        >
            <FlipCardInner focusCVC={focusCVC}>
                <FlipCardFront>
                    <CreditCard
                        number={props.number}
                        neededHash={props.neededHash}
                        name={name}
                        focusCVC={focusCVC} />
                </FlipCardFront>

                <FlipCardBack>
                    <CardBackNameContainer>
                        <p>{name}</p>
                        <p>{cvc}</p>
                    </CardBackNameContainer>
                    {/* <CardBackCVCContainer>
                        <p>{cvc}</p>
                    </CardBackCVCContainer> */}
                    <CardBackThank>
                        <p>Thank you for using our service ! </p>
                    </CardBackThank>

                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    )
}



export default Test

