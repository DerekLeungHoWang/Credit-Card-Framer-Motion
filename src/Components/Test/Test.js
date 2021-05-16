import React from 'react'
import PropTypes from 'prop-types'
import { FlipCard, FlipCardBack, FlipCardFront, FlipCardInner } from './TestStyles'
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
    const { focusCVC } = props
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
                        name={props.name}
                        focusCVC={focusCVC} />
                </FlipCardFront>

                <FlipCardBack>
                    <h1>John Doe</h1>
                    <p>Architect  Engineer</p>
                    <p>We love that guy</p>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    )
}



export default Test

