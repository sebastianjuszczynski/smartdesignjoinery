import React from 'react';
import HeroImage from "../HeroImage"
import OurService from '../OurService';
import Services from '../Services';
import FormHeader from '../FormHeader';
import Form from '../Form/index';
import ScrollToTop from '../ScrollToTop';
import ParallaxSection from '../ParallaxSection';
import Motto from '../Motto';

const Home = () => {
    return (
        <>
          <HeroImage />
          <Motto />
          <ParallaxSection />
          <OurService />
          <Services />
          <FormHeader />
          <Form />
          <ScrollToTop />
        </>
    )
}

export default Home;