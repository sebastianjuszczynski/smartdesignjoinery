import React, { useState, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MasonryContainer, IMG } from './styled';
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from 'framer-motion';
import { WaveLoading } from 'react-loadingg';
import Pagination from '../Pagination';
import img1 from "../../assets/Gallery/Stairs/1.jpg";
import img2 from "../../assets/Gallery/Stairs/2.jpg";
import img3 from "../../assets/Gallery/Stairs/3.jpg";
import img4 from "../../assets/Gallery/Stairs/4.jpg";
import img5 from "../../assets/Gallery/Stairs/5.jpg";
import img6 from "../../assets/Gallery/Stairs/6.jpg";
import img7 from "../../assets/Gallery/Stairs/7.jpg";
import img8 from "../../assets/Gallery/Stairs/8.jpg";
import img9 from "../../assets/Gallery/Stairs/9.jpg";
import img10 from "../../assets/Gallery/Stairs/10.jpg";
import img11 from "../../assets/Gallery/Stairs/11.jpg";
import img12 from "../../assets/Gallery/Stairs/12.jpg";
import img13 from "../../assets/Gallery/Stairs/13.jpg";
import img14 from "../../assets/Gallery/Stairs/14.jpg";
import img15 from "../../assets/Gallery/Stairs/15.jpg";
import img16 from "../../assets/Gallery/Stairs/16.jpg";
import img17 from "../../assets/Gallery/Stairs/17.jpg";
import img18 from "../../assets/Gallery/Stairs/18.jpg";
import img19 from "../../assets/Gallery/Stairs/19.jpg";
import img20 from "../../assets/Gallery/Stairs/20.jpg";
import img21 from "../../assets/Gallery/Stairs/21.jpg";
import img22 from "../../assets/Gallery/Stairs/22.jpg";
import img23 from "../../assets/Gallery/Stairs/23.jpg";
import img24 from "../../assets/Gallery/Stairs/24.jpg";
import img25 from "../../assets/Gallery/Stairs/25.jpg";
import img26 from "../../assets/Gallery/Stairs/26.jpg";
import img27 from "../../assets/Gallery/Stairs/27.jpg";
import img28 from "../../assets/Gallery/Stairs/28.jpg";
import img29 from "../../assets/Gallery/Stairs/29.jpg";
import img30 from "../../assets/Gallery/Stairs/30.jpg";
import img31 from "../../assets/Gallery/Stairs/31.jpg";
import img32 from "../../assets/Gallery/Stairs/32.jpg";
import img33 from "../../assets/Gallery/Stairs/33.jpg";


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


const Stairs = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33]

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

export default Stairs;