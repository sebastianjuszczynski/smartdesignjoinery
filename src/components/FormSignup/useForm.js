import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [send, setSend] = useState(false);
  const [isSubmiting, setIsSubmitting] = useState(false);
  
  useEffect(
    () => {
      if (Object.keys(errors).length === 0) {
        if (isSubmiting)
          setSend(true);
      }
    },
    [errors, setSend, isSubmiting]
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
  };

const handleClick = () => {
    setErrors(validate(values));
    setIsSubmitting(true);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (send) {
      console.log("SENDING");
      emailjs
        .sendForm(
          'Gmail', 'template_lgc1ezc', e.target, 'user_S84rE02uoYvJJVbKOZwK3')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setValues({
        username: '',
        email: '',
      })
      setSend(false);
    }
  };


  return { handleChange, values, handleSubmit, errors, handleClick};
};

export default useForm;