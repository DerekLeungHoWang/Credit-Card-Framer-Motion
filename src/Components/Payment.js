import React, { useState } from 'react'
import CreditCard from './CreditCard/CreditCard'
import PaymentForm from './CreditCard/PaymentForm'
import { PaymentContainer, CreditCardWrapper } from './PaymentStyles'

export default function Payment() {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('Cat in the Hat');
    const [neededHash,setNeededHash]=useState(16);
    const handleNumberChange = (e) => {
  
        let neededHash = 16 - e.target.value.length
     
        const regex = /^ *[\d ]*$/;

    
      console.log('trimed value ', e.target.value);
        if (regex.test(e.target.value)) {

              let value = `${e.target.value}`
              let neededHash = 16-value.replace(/\s/g, '').trim().length
           
       
              setNeededHash(neededHash)
            setNumber(`${value}`);
        }



    };

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNumber(event.target.value);
    };

    return (
        <PaymentContainer>

            <CreditCard number={number} neededHash={neededHash} />

            <PaymentForm
                handleNumberChange={handleNumberChange}
                handleNameChange={handleNameChange}
                number={number}
            />
        </PaymentContainer>
    )
}
