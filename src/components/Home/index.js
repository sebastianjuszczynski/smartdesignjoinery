import React from 'react';
import HeroImage from "../HeroImage"
import OurService from '../OurService';
import Services from '../Services';
import FormHeader from '../FormHeader';
import Form from '../Form/index';
import Footer from '../Footer/index';

const Home = () => {
    return (
        <>
          <HeroImage />
          <OurService />
          <Services />
          <FormHeader />
          <Form />
          <Footer />

        </>
    )
}

export default Home;