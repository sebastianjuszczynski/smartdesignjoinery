import React, { useState, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MasonryContainer, IMG } from './styled';
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from 'framer-motion';
import { WaveLoading } from 'react-loadingg';
import Pagination from '../Pagination';
import img1 from "../../assets/Gallery/1.jpg";
import img2 from "../../assets/Gallery/2.jpg";
import img3 from "../../assets/Gallery/3.jpg";
import img4 from "../../assets/Gallery/4.jpg";
import img5 from "../../assets/Gallery/5.jpg";
import img6 from "../../assets/Gallery/6.jpg";
import img7 from "../../assets/Gallery/7.jpg";
import img8 from "../../assets/Gallery/8.jpg";
import img9 from "../../assets/Gallery/9.jpg";
import img10 from "../../assets/Gallery/10.jpg";
import img11 from "../../assets/Gallery/11.jpg";
import img12 from "../../assets/Gallery/12.jpg";
import img13 from "../../assets/Gallery/13.jpg";
import img14 from "../../assets/Gallery/14.jpg";
import img15 from "../../assets/Gallery/15.jpg";
import img16 from "../../assets/Gallery/16.jpg";
import img17 from "../../assets/Gallery/17.jpg";
import img18 from "../../assets/Gallery/18.jpg";
import img19 from "../../assets/Gallery/19.jpg";
import img20 from "../../assets/Gallery/20.jpg";
import img21 from "../../assets/Gallery/21.jpg";
import img22 from "../../assets/Gallery/22.jpg";
import img23 from "../../assets/Gallery/23.jpg";
import img24 from "../../assets/Gallery/24.jpg";
import img25 from "../../assets/Gallery/25.jpg";
import img26 from "../../assets/Gallery/26.jpg";
import img27 from "../../assets/Gallery/27.jpg";
import img28 from "../../assets/Gallery/28.jpg";
import img29 from "../../assets/Gallery/29.jpg";
import img30 from "../../assets/Gallery/30.jpg";
import img31 from "../../assets/Gallery/31.jpg";
import img32 from "../../assets/Gallery/32.jpg";
import img33 from "../../assets/Gallery/33.jpg";
import img34 from "../../assets/Gallery/34.jpg";
import img35 from "../../assets/Gallery/35.jpg";
import img36 from "../../assets/Gallery/36.jpg";
import img37 from "../../assets/Gallery/37.jpg";
import img38 from "../../assets/Gallery/38.jpg";
import img39 from "../../assets/Gallery/39.jpg";
import img40 from "../../assets/Gallery/40.jpg";
import img41 from "../../assets/Gallery/41.jpg";
import img42 from "../../assets/Gallery/42.jpg";
import img43 from "../../assets/Gallery/43.jpg";
import img44 from "../../assets/Gallery/44.jpg";
import img45 from "../../assets/Gallery/45.jpg";
import img46 from "../../assets/Gallery/46.jpg";
import img47 from "../../assets/Gallery/47.jpg";
import img48 from "../../assets/Gallery/48.jpg";
import img49 from "../../assets/Gallery/49.jpg";
import img50 from "../../assets/Gallery/50.jpg";
import img51 from "../../assets/Gallery/51.jpg";
import img52 from "../../assets/Gallery/52.jpg";
import img53 from "../../assets/Gallery/53.jpg";
import img54 from "../../assets/Gallery/54.jpg";
import img55 from "../../assets/Gallery/55.jpg";
import img56 from "../../assets/Gallery/56.jpg";
import img57 from "../../assets/Gallery/57.jpg";
import img58 from "../../assets/Gallery/58.jpg";
import img59 from "../../assets/Gallery/59.jpg";
import img60 from "../../assets/Gallery/60.jpg";
import img61 from "../../assets/Gallery/61.jpg";
import img62 from "../../assets/Gallery/62.jpg";
import img63 from "../../assets/Gallery/63.jpg";
import img64 from "../../assets/Gallery/64.jpg";
import img65 from "../../assets/Gallery/65.jpg";
import img66 from "../../assets/Gallery/66.jpg";
import img67 from "../../assets/Gallery/67.jpg";
import img68 from "../../assets/Gallery/68.jpg";
import img69 from "../../assets/Gallery/69.jpg";
import img70 from "../../assets/Gallery/70.jpg";
import img71 from "../../assets/Gallery/71.jpg";
import img72 from "../../assets/Gallery/72.jpg";
import img73 from "../../assets/Gallery/73.jpg";
import img74 from "../../assets/Gallery/74.jpg";
import img75 from "../../assets/Gallery/75.jpg";
import img76 from "../../assets/Gallery/76.jpg";
import img77 from "../../assets/Gallery/77.jpg";
import img78 from "../../assets/Gallery/78.jpg";
import img79 from "../../assets/Gallery/79.jpg";
import img80 from "../../assets/Gallery/80.jpg";
import img81 from "../../assets/Gallery/81.jpg";
import img82 from "../../assets/Gallery/82.jpg";
import img83 from "../../assets/Gallery/83.jpg";
import img84 from "../../assets/Gallery/84.jpg";
import img85 from "../../assets/Gallery/85.jpg";
import img86 from "../../assets/Gallery/86.jpg";
import img87 from "../../assets/Gallery/87.jpg";
import img88 from "../../assets/Gallery/88.jpg";
import img89 from "../../assets/Gallery/89.jpg";
import img90 from "../../assets/Gallery/90.jpg";
import img91 from "../../assets/Gallery/91.jpg";
import img92 from "../../assets/Gallery/92.jpg";
import img93 from "../../assets/Gallery/93.jpg";
import img94 from "../../assets/Gallery/94.jpg";
import img95 from "../../assets/Gallery/95.jpg";
import img96 from "../../assets/Gallery/96.jpg";
import img97 from "../../assets/Gallery/97.jpg";
import img98 from "../../assets/Gallery/98.jpg";
import img99 from "../../assets/Gallery/99.jpg";
import img100 from "../../assets/Gallery/100.jpg";
import img101 from "../../assets/Gallery/101.jpg";
import img102 from "../../assets/Gallery/102.jpg";
import img103 from "../../assets/Gallery/103.jpg";
import img104 from "../../assets/Gallery/104.jpg";
import img105 from "../../assets/Gallery/105.jpg";
import img106 from "../../assets/Gallery/106.jpg";
import img107 from "../../assets/Gallery/107.jpg";
import img108 from "../../assets/Gallery/108.jpg";
import img109 from "../../assets/Gallery/109.jpg";
import img110 from "../../assets/Gallery/110.jpg";
import img111 from "../../assets/Gallery/111.jpg";
import img112 from "../../assets/Gallery/112.jpg";
import img113 from "../../assets/Gallery/113.jpg";
import img114 from "../../assets/Gallery/114.jpg";
import img115 from "../../assets/Gallery/115.jpg";


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


const Grid = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59, img60, img61, img62, img63, img64, img65, img66, img67, img68, img69, img70, img71, img72, img73, img74, img75, img76, img77, img78, img79, img80, img81, img82, img83, img84, img85, img86, img87, img88, img89, img90, img91, img92, img93, img94, img95, img96, img97, img98, img99, img100, img101, img102, img103, img104, img105, img106, img107, img108, img109, img110, img111, img112, img113, img114, img115, img35]

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

export default Grid;