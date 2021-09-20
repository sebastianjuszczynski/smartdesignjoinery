import React from 'react';
import HeroImage from "../HeroImage"
import OurService from '../OurService';
import Services from '../Services';
import FormHeader from '../FormHeader';
import Form from '../Form/index';

import ScrollToTop from '../ScrollToTop';

const Home = () => {
    return (
        <>
          <HeroImage />
          <OurService />
          <Services />
          <FormHeader />
          <Form />
          <ScrollToTop />
        </>
    )
}

export default Home;