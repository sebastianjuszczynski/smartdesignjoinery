import React, { useState, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MasonryContainer, IMG } from './styled';
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from 'framer-motion';
import { WaveLoading } from 'react-loadingg';
import Pagination from '../Pagination';
import img1 from "../../assets/Gallery/Wardrobes/1.jpg";
import img2 from "../../assets/Gallery/Wardrobes/2.jpg";
import img3 from "../../assets/Gallery/Wardrobes/3.jpg";
import img4 from "../../assets/Gallery/Wardrobes/4.jpg";
import img5 from "../../assets/Gallery/Wardrobes/5.jpg";
import img6 from "../../assets/Gallery/Wardrobes/6.jpg";
import img7 from "../../assets/Gallery/Wardrobes/7.jpg";
import img8 from "../../assets/Gallery/Wardrobes/8.jpg";
import img9 from "../../assets/Gallery/Wardrobes/9.jpg";
import img10 from "../../assets/Gallery/Wardrobes/10.jpg";
import img11 from "../../assets/Gallery/Wardrobes/11.jpg";
import img12 from "../../assets/Gallery/Wardrobes/12.jpg";
import img13 from "../../assets/Gallery/Wardrobes/13.jpg";
import img14 from "../../assets/Gallery/Wardrobes/14.jpg";
import img15 from "../../assets/Gallery/Wardrobes/15.jpg";
import img16 from "../../assets/Gallery/Wardrobes/16.jpg";
import img17 from "../../assets/Gallery/Wardrobes/17.jpg";
import img18 from "../../assets/Gallery/Wardrobes/18.jpg";
import img19 from "../../assets/Gallery/Wardrobes/19.jpg";
import img20 from "../../assets/Gallery/Wardrobes/20.jpg";
import img21 from "../../assets/Gallery/Wardrobes/21.jpg";
import img22 from "../../assets/Gallery/Wardrobes/22.jpg";
import img23 from "../../assets/Gallery/Wardrobes/23.jpg";
import img24 from "../../assets/Gallery/Wardrobes/24.jpg";
import img25 from "../../assets/Gallery/Wardrobes/25.jpg";
import img26 from "../../assets/Gallery/Wardrobes/26.jpg";
import img27 from "../../assets/Gallery/Wardrobes/27.jpg";
import img28 from "../../assets/Gallery/Wardrobes/28.jpg";
import img29 from "../../assets/Gallery/Wardrobes/29.jpg";
import img30 from "../../assets/Gallery/Wardrobes/30.jpg";
import img31 from "../../assets/Gallery/Wardrobes/31.jpg";
import img32 from "../../assets/Gallery/Wardrobes/32.jpg";
import img33 from "../../assets/Gallery/Wardrobes/33.jpg";
import img34 from "../../assets/Gallery/Wardrobes/34.jpg";
import img35 from "../../assets/Gallery/Wardrobes/35.jpg";
import img36 from "../../assets/Gallery/Wardrobes/36.jpg";
import img37 from "../../assets/Gallery/Wardrobes/37.jpg";
import img38 from "../../assets/Gallery/Wardrobes/38.jpg";
import img39 from "../../assets/Gallery/Wardrobes/39.jpg";
import img40 from "../../assets/Gallery/Wardrobes/40.jpg";
import img41 from "../../assets/Gallery/Wardrobes/41.jpg";
import img42 from "../../assets/Gallery/Wardrobes/42.jpg";
import img43 from "../../assets/Gallery/Wardrobes/43.jpg";
import img44 from "../../assets/Gallery/Wardrobes/44.jpg";
import img45 from "../../assets/Gallery/Wardrobes/45.jpg";
import img46 from "../../assets/Gallery/Wardrobes/46.jpg";
import img47 from "../../assets/Gallery/Wardrobes/47.jpg";
import img48 from "../../assets/Gallery/Wardrobes/48.jpg";
import img49 from "../../assets/Gallery/Wardrobes/49.jpg";
import img50 from "../../assets/Gallery/Wardrobes/50.jpg";
import img51 from "../../assets/Gallery/Wardrobes/51.jpg";
import img52 from "../../assets/Gallery/Wardrobes/52.jpg";
import img53 from "../../assets/Gallery/Wardrobes/53.jpg";
import img54 from "../../assets/Gallery/Wardrobes/54.jpg";
import img55 from "../../assets/Gallery/Wardrobes/55.jpg";
import img56 from "../../assets/Gallery/Wardrobes/56.jpg";
import img57 from "../../assets/Gallery/Wardrobes/57.jpg";
import img58 from "../../assets/Gallery/Wardrobes/58.jpg";
import img59 from "../../assets/Gallery/Wardrobes/59.jpg";
import img60 from "../../assets/Gallery/Wardrobes/60.jpg";
import img61 from "../../assets/Gallery/Wardrobes/61.jpg";
import img62 from "../../assets/Gallery/Wardrobes/62.jpg";
import img63 from "../../assets/Gallery/Wardrobes/63.jpg";
import img64 from "../../assets/Gallery/Wardrobes/64.jpg";
import img65 from "../../assets/Gallery/Wardrobes/65.jpg";
import img66 from "../../assets/Gallery/Wardrobes/66.jpg";
import img67 from "../../assets/Gallery/Wardrobes/67.jpg";
import img68 from "../../assets/Gallery/Wardrobes/68.jpg";
import img69 from "../../assets/Gallery/Wardrobes/69.jpg";



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


const Wardrobes = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59, img60, img61, img62, img63, img64, img65, img66, img67, img68, img69]

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

export default Wardrobes;