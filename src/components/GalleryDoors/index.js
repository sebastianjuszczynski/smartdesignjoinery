import React from 'react';
import GalleryHeader from '../GalleryHeader';
import Doors from '../Doors';
import ScrollToTop from '../ScrollToTop';
import { Container } from "./styled"


const GalleryDoors = () => {
  return (
    <Container>
      <GalleryHeader />
      < Doors/>
      <ScrollToTop />
    </Container>
  )
}

export default GalleryDoors;