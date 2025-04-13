import React from "react";
import { createRoot } from "react-dom/client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel के लिए स्टाइल्स इम्पोर्ट करें
import c1 from "../assets/image1.webp";
import c2 from "../assets/image2.webp";
import c3 from "../assets/image3.webp";
import c4 from "../assets/image4.webp";
import c5 from "../assets/image5.webp";
import './crousel.css'



const DemoCarousel = () => {
    const onChange = (index) => {
       // console.log("Slide changed to:", index);
    };

    const onClickItem = (index) => {
        console.log("Item clicked:", index);
    };

    const onClickThumb = (index) => {
        console.log("Thumbnail clicked:", index);
    };

    return (
       <div className='moh'>
        <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} infiniteLoop={true} autoPlay={true} showThumbs={false}>
    <div>
        <img src={c1} alt="Slide 1" />
        <p className="legend"></p>
    </div>
    <div>
        <img src={c2} alt="Slide 2" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={c3} alt="Slide 3" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src={c4} alt="Slide 4" />
        <p className="legend">Legend 4</p>
    </div>
    <div>
        <img src={c5} alt="Slide 4" />
        <p className="legend">Legend 4</p>
    </div>
    
    
</Carousel>

       </div>
    );
};

// Root element को पकड़ें और React 18 के अनुसार render करें
const rootElement = document.querySelector(".demo-carousel");
if (rootElement) {
    createRoot(rootElement).render(<DemoCarousel />);
}

export default DemoCarousel;
