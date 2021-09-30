import React, { useRef } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { FormInputs, FormLabel, FormInput, FormTextarea, FormInputButton, Container, ContainerItem, Link } from "./styled";
import emailjs from 'emailjs-com';

import './style.css';

import { motion } from 'framer-motion';

const pathVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    }
  }
};



const FormSignup = ({ submitForm }) => {
  const { handleChange, errors, values, setValues, setErrors } = useForm(
    submitForm,
    validate
  );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    // setIsSubmitting(true);


    emailjs.sendForm('Gmail', 'template_lgc1ezc', e.target, 'user_S84rE02uoYvJJVbKOZwK3')
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
          <Container>
            <ContainerItem>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 512 512"
      width="50px"
      height="30px"
      
    >
      
        <motion.path variants={pathVariants} initial="hidden" animate="visible"
          fill="#FFF"
          stroke="#000"
          strokeWidth="15"
          d="M256 220.349l256-85.334V94.068c0-17.688-14.328-32-32-32H32c-17.672 0-32 14.313-32 32v40.947l256 85.334z"
        ></motion.path>
        <motion.path variants={pathVariants} initial="hidden" animate="visible"
          fill="#FFF"
          stroke="#000"
          strokeWidth="15"
          d="M266.125 286.344A32.107 32.107 0 01256 288c-3.422 0-6.828-.563-10.125-1.656L0 204.385V416c0 17.688 14.328 32 32 32h448c17.672 0 32-14.313 32-32V204.385l-245.875 81.959z"
        ></motion.path>
      
    </svg> 
              <Link href="mailto:smartdesignjoinery@gmail.com">smartdesignjoinery@gmail.com</Link>
            </ContainerItem>
            <ContainerItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                viewBox="0 0 53.942 53.942"
                width="50px"
                height="30px"
              >
                <motion.path variants={pathVariants} initial="hidden" animate="visible"

                  fill="#FFF"
                  stroke="#000"
                  strokeWidth="2"
                  d="M52.253 40.223c-1.924-3.61-8.603-7.524-8.897-7.695-.859-.485-1.754-.741-2.592-.741-1.247 0-2.267.566-2.885 1.597-.977 1.16-2.188 2.516-2.482 2.726-2.276 1.533-4.058 1.359-6.03-.598L18.366 24.59c-1.959-1.945-2.139-3.735-.605-5.982.215-.294 1.58-1.498 2.75-2.469.744-.44 1.256-1.094 1.48-1.897.298-1.068.079-2.324-.625-3.547-.165-.282-4.11-6.913-7.744-8.822a4.766 4.766 0 00-2.209-.544c-1.262 0-2.45.488-3.343 1.374L5.638 5.115C1.793 8.931.4 13.256 1.498 17.971c.917 3.929 3.585 8.11 7.934 12.425L23.518 44.38c5.504 5.464 10.751 8.234 15.596 8.234h.001c3.563 0 6.885-1.503 9.871-4.467l2.43-2.412a4.641 4.641 0 00.837-5.511z"
                ></motion.path>
              </svg>
              <Link href="tel:0787936433">0787936433</Link>
            </ContainerItem>
          </Container>
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