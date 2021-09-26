import React, { lazy, Suspense } from 'react';
import GalleryHeader from '../GalleryHeader';
// import Grid from '../Grid';
import ScrollToTop from '../ScrollToTop';
import {Container} from "./styled"
const Grid = lazy(() => import("../Grid/index"));

const Gallery = () => {
    return (
      <Container>
      <GalleryHeader />
      {/* <Grid /> */}
      <Suspense fallback={<div>Loading.....</div>}>
            <Grid />
          </Suspense>
      <ScrollToTop />
      </Container>
    )
}

export default Gallery;