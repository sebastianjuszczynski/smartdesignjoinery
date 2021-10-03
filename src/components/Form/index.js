import React, { useState } from 'react';
import FormSignup from '../FormSignup';
import { Container } from './styled';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);


  const submitForm = () => {
    setIsSubmitted(true);
  }

  return (
    <>
      <Container>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          window.location.reload(false)
        )}
      </Container>
    </>
  );
};

export default Form;