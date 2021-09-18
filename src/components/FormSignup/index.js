import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { Form, FormInputs, FormLabel, FormInput, FormTextarea, FormInputButton } from "./styled";


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <Form className='form' noValidate>
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
        <FormInputButton type='submit' onClick={handleSubmit}>
          Send
        </FormInputButton>
      </Form>
    </>
  );
};

export default FormSignup;