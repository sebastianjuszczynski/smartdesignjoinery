import React from 'react';
import GalleryHeader from '../GalleryHeader';
import Grid from '../Grid';
import ScrollToTop from '../ScrollToTop';
import { Container } from "./styled"


const Gallery = () => {
  return (
    <Container>
      <GalleryHeader />
      <Grid />
      <ScrollToTop />
    </Container>
  )
}

export default Gallery;