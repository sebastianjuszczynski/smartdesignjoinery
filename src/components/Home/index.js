import React from 'react';
import HeroImage from "../HeroImage"
import OurService from '../OurService';
import Services from '../Services';
import FormHeader from '../FormHeader';

const Home = () => {
    return (
        <>
          <HeroImage />
          <OurService />
          <Services />
          <FormHeader />
        </>
    )
}

export default Home;