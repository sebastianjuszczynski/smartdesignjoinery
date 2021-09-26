import React from 'react';
import Form from '../Form/index';
import FormHeader from '../FormHeader';
import ScrollToTop from '../ScrollToTop';
import { motion } from 'framer-motion';

const pathVariants = {
    hidden: {
        pathLength: 0
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 5,
            ease: "easeInOut",
        }
    }
};

const Contact = () => {
    return (
        <>
            <FormHeader />
            <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 50 50"
      width="300px"
      height="200px"
    >
      <motion.path variants={pathVariants} initial="hidden" animate="visible"

        fill="#F8F3F3"
        stroke="#000"
        strokeWidth="1"
        d="M16.6 28.112s0 0 0 0l8.5-8.5c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L18 38.013c-1.1 1.064-2.7 1.468-4.2 1.8-1.5 0-3.1-.6-4.2-1.8-2.3-2.3-2.3-6.1 0-8.5l17-17c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.3l-12.8 12.8h0l12.8-12.8c2.747-2.3 3.254-8.9 0-11.3-2.3-2.806-9-3.184-11.4 0l-16.8 17c-1.296.677-2.341 4.217-1.917 5.323.394 1.027 1.017 2.477 1.817 3.177 1.856 2.656 6.024 1.876 8.4 0l12.8-12.8c1.368-.572 1.381-3.902 0-5.6-1.381-1.697-4.9-1.514-5.7 0l-8.5 8.5"
      ></motion.path>
    </svg>
            <Form />
            <ScrollToTop />
        </>
    )
}

export default Contact;