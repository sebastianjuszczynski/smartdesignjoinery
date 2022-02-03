import React from 'react';
import GalleryHeader from '../GalleryHeader';
import Stairs from '../Stairs';
import ScrollToTop from '../ScrollToTop';
import { Container } from "./styled"


const GalleryStairs = () => {
  return (
    <Container>
      <GalleryHeader />
      <Stairs />
      <ScrollToTop />
    </Container>
  )
}

export default GalleryStairs;