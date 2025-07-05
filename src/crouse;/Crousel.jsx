import React from "react";
import { createRoot } from "react-dom/client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel के लिए स्टाइल्स
import c1 from "../assets/image1.jpg";
import c2 from "../assets/image2.webp";
import c3 from "../assets/image3.jpg";
import c4 from "../assets/image4.jpg";
import c5 from "../assets/image5.webp";
import c6 from "../assets/image6.jpg";
import './crousel.css';
import { BiBorderAll } from "react-icons/bi";
import { TbBackground } from "react-icons/tb";

const DemoCarousel = () => {
    const onChange = (index) => {};
    const onClickItem = (index) => {
        console.log("Item clicked:", index);
    };
    const onClickThumb = (index) => {
        console.log("Thumbnail clicked:", index);
    };

 const imageStyle = {
    width: '100%',
    height: '100%',
    maxHeight: '350px', // Optional: Limit the max height
    objectFit: 'contain', // Use 'contain' to ensure full image fits without cropping
    display: 'block',
    margin: '0 auto',
    boxShadow: '0px 0px 5px 0px white', // White glow
    borderRadius: '10px', // Rounded corners
};



    return (
        <div className='moh'>
            <Carousel
                showArrows={true}
                onChange={onChange}
                onClickItem={onClickItem}
                onClickThumb={onClickThumb}
                infiniteLoop={true}
                autoPlay={true}
                showThumbs={false}
            >
                <div className="cv">
                    <img src={c1} alt="Slide 1" style={imageStyle} />
                    <p className="legend"></p>
                </div>
                 <div className="cv">
                    <img src={c2} alt="Slide 2" style={imageStyle} />
                    <p className="legend">Legend 2</p>
                </div>
                 <div className="cv">
                    <img src={c3} alt="Slide 3" style={imageStyle} />
                    <p className="legend">Legend 3</p>
                </div>
                
                    <div className="cv">
                    <img src={c4} alt="Slide 5" style={imageStyle}  width="100%"/>
                    <p className="legend"> 4</p>
                </div>
                <div>
                    <img src={c5} alt="Slide 5" style={imageStyle}  width="100%"/>
                    <p className="legend"> 5</p>
                </div>
                <div>
                    <img src={c6} alt="Slide 5" style={imageStyle}  width="100%"/>
                    <p className="legend">6</p>
                </div>
            </Carousel>
        </div>
    );
};

const rootElement = document.querySelector(".demo-carousel");
if (rootElement) {
    createRoot(rootElement).render(<DemoCarousel />);
}

export default DemoCarousel;
