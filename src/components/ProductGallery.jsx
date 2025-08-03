import React from "react";
import teeBox from "../assets/tee-1.png";
import teeBlack from "../assets/tee-2.png";
import teeGray from "../assets/tee-3.png";
import teeWhite from "../assets/tee-4.png";
import "./ProductGallery.css";

const ProductGallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-item">
                <img src={teeBox} alt="티 모음" />
            </div>
            <div className="gallery-item">
                <img src={teeBlack} alt="티 검정" />
            </div>
            <div className="gallery-item">
                <img src={teeGray} alt="티 회색" />
            </div>
            <div className="gallery-item">
                <img src={teeWhite} alt="티 흰색" />
            </div>
        </div>
    );
};

export default ProductGallery;
