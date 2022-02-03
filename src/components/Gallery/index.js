import React from 'react';
import GalleryHeader from '../GalleryHeader';
import Wardrobes from '../Wardrobes';
import ScrollToTop from '../ScrollToTop';
import { Container } from "./styled"


const Gallery = () => {
  return (
    <Container>
      <GalleryHeader />
      <Wardrobes />
      <ScrollToTop />
    </Container>
  )
}

export default Gallery;