import React, { useRef } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { FormInputs, FormLabel, FormInput, FormTextarea, FormInputButton } from "./styled";
import emailjs from 'emailjs-com';

import './style.css';



const FormSignup = ({ submitForm }) => {
  const { handleChange, errors, values, setValues, setErrors, setIsSubmitting } = useForm(
    submitForm,
    validate
  );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    // setIsSubmitting(true);
    

    emailjs.sendForm('yahoo', 'template_lgc1ezc', e.target, 'user_S84rE02uoYvJJVbKOZwK3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
    setValues({
      username: '',
      email: '',
      message: ''
    });
    console.log(e.target);
  };


  return (
    <>
      <form className='form' noValidate onSubmit={sendEmail} ref={form}>
        <FormInputs>
          <FormLabel>Name</FormLabel>
          <FormInput
            type='text'
            name='username'
            placeholder='Enter your name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Email</FormLabel>
          <FormInput
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Password</FormLabel>
          <FormTextarea
            name='message'
            rows='7'
            placeholder='Please type your request...'
            value={values.password}
            onChange={handleChange}>
          </FormTextarea>
          {errors.message && <p>{errors.message}</p>}
        </FormInputs>
        <FormInputButton type='submit'>
          Send
        </FormInputButton>
      </form>
    </>
  );
};

export default FormSignup;