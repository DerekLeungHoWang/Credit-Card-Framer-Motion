import React, { useState } from 'react'
import CreditCard from './CreditCard/CreditCard'
import PaymentForm from './CreditCard/PaymentForm'
import { PaymentContainer, CreditCardWrapper } from './PaymentStyles'
import Test from './Test/Test';

export default function Payment() {

    const [number, setNumber] = useState('################');
    const [name, setName] = useState('Card Holder');
    const [neededHash, setNeededHash] = useState(16);
    const [focusCVC, setFocusCVC] = useState(false);
    const [cvc, setCvc] = useState("345");


    const handleNameChange = (e) => {

        setName(e.target.value)
    };
    const handleNumberChange = (e) => {

        let neededHash = 16 - e.target.value.length

        const regex = /^ *[\d ]*$/;


        console.log('trimed value ', e.target.value);
        if (regex.test(e.target.value)) {

            let value = `${e.target.value}`
            let neededHash = 16 - value.replace(/\s/g, '').trim().length


            setNeededHash(neededHash)
            setNumber(`${value}`);
        }



    };

    const handleBlurCVC = (e) => {
        setFocusCVC(false)
    }
    const handleFocusCVC = (e) => {
        setFocusCVC(true)
    }

    const handleCVCChange = (e) => {
        setCvc(e.target.value)
    }

    return (
        <PaymentContainer>

            {/* <CreditCard number={number} neededHash={neededHash} /> */}
            <Test number={number} neededHash={neededHash} name={name} focusCVC={focusCVC} cvc={cvc} />
            <PaymentForm
                handleBlurCVC={handleBlurCVC}
                handleFocusCVC={handleFocusCVC}
                handleNumberChange={handleNumberChange}
                handleNameChange={handleNameChange}
                handleCVCChange={handleCVCChange}
                number={number}
                cvc={cvc}

            />
        </PaymentContainer>
    )
}
