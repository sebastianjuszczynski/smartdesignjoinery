import { useState, useEffect } from 'react';


const useForm = (callback) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const isSubmitting = false;
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
  };
  // const submitting = () => {
  //   setIsSubmitting(true);
  // }

  // const handleSubmit = e => {
    
  //   setIsSubmitting(true);

  // };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors, isSubmitting, callback]
  );

  return { handleChange, values, errors, setValues, setErrors };
};

export default useForm;