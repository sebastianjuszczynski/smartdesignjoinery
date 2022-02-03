import React, { useState, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MasonryContainer, IMG } from './styled';
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from 'framer-motion';
import { WaveLoading } from 'react-loadingg';
import Pagination from '../Pagination';
import img1 from "../../assets/Gallery/Doors/1.jpg";
import img2 from "../../assets/Gallery/Doors/2.jpg";
import img3 from "../../assets/Gallery/Doors/3.jpg";
import img4 from "../../assets/Gallery/Doors/4.jpg";
import img5 from "../../assets/Gallery/Doors/5.jpg";
import img6 from "../../assets/Gallery/Doors/6.jpg";
import img7 from "../../assets/Gallery/Doors/7.jpg";
import img8 from "../../assets/Gallery/Doors/8.jpg";
import img9 from "../../assets/Gallery/Doors/9.jpg";
import img10 from "../../assets/Gallery/Doors/10.jpg";
import img11 from "../../assets/Gallery/Doors/11.jpg";
import img12 from "../../assets/Gallery/Doors/12.jpg";
import img13 from "../../assets/Gallery/Doors/13.jpg";




const variants = {
    visible: i => ({
        opacity: 0.8,
        transition: {
            delay: i * 0.15
        },
    }),
    hidden: {
        opacity: 0,
    },
}


const Doors = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13]

    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage] = useState(12);

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= currentImages.length) {
            setLoading(false);
        }
    }

    return (
        <SRLWrapper>
            <MasonryContainer>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1100: 4 }}
                >
                    <div style={{ display: loading ? "block" : "none" }}>
                        <WaveLoading
                            color="#6C3A13"
                            size="large"
                        />
                    </div>
                    <Masonry
                        gutter="10px">
                        {currentImages.map((currentImage, i) => (
                            <IMG as={motion.img}
                                style={{ display: loading ? "none" : "block" }}
                                key={i}
                                src={currentImage}
                                alt=""
                                custom={i}
                                animate="visible"
                                initial='hidden'
                                variants={variants}
                                whileHover={{ opacity: 1 }}
                                onLoad={imageLoaded}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </MasonryContainer>
            <div style={{ display: loading ? "none" : "block" }}>
                <Pagination
                    imagesPerPage={imagesPerPage}
                    totalImages={images.length}
                    paginate={paginate}
                />
            </div>
        </SRLWrapper>
    )
}

export default Doors;