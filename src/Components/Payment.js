import React, { useState } from 'react'
import CreditCard from './CreditCard/CreditCard'
import PaymentForm from './CreditCard/PaymentForm'
import { PaymentContainer, CreditCardWrapper } from './PaymentStyles'

export default function Payment() {

    const [number, setNumber] = useState('1234567890123456');
    const [name, setName] = useState('Cat in the Hat');

    const handleNumberChange = (event) => {
        console.log(event.target.value);
        setNumber(event.target.value);
    };

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNumber(event.target.value);
    };

    return (
        <PaymentContainer>
           
                <CreditCard   number={number} />
      
            <PaymentForm
            handleNumberChange={handleNumberChange}
            handleNameChange={handleNameChange}
            number={number}
            />
        </PaymentContainer>
    )
}
