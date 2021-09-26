import React from 'react';
import { FormH3, FormSpan } from './styled';
import { motion } from 'framer-motion';

const textVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: { type: "spring", stiffness: 100, duration: 2  }
    },
};

const PrivacyPolicyHeader = () => {
    return (
        <FormH3 as={motion.h3} variants={textVariants} initial="hidden" animate="visible">Privacy<FormSpan> policy</FormSpan></FormH3>
    )
}

export default PrivacyPolicyHeader;