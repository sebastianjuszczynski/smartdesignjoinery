import React from 'react';
import Form from '../Form/index';
import FormHeader from '../FormHeader';
import ScrollToTop from '../ScrollToTop';
import {Container} from "./styled"


const Contact = () => {
    return (
        <Container>
            <FormHeader />
            <Form />
            <ScrollToTop />
        </Container>
    )
}

export default Contact;