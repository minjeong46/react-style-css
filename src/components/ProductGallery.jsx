import React, { useState } from "react";
import teeBox from "../assets/tee-1.png";
import teeBlack from "../assets/tee-2.png";
import teeGray from "../assets/tee-3.png";
import teeWhite from "../assets/tee-4.png";

const ProductGallery = () => {
    const [productImg, setProductImg] = useState([
        { src: teeBox, alt: "티 모음" },
        { src: teeBlack, alt: "티 검정" },
        { src: teeGray, alt: "티 회색" },
        { src: teeWhite, alt: "티 흰색" },
    ]);

    return (
        <div className="w-100 grid grid-cols-3 grid-rows-1 gap-8 pb-8">
            {productImg &&
                productImg.map((img) => {
                    return (
                        <div key={img.alt} className="w-100 overflow-hidden rounded-lg gallery-item">
                            <img className="w-100 object-cover rounded-lg" src={img.src} alt={img.alt} />
                        </div>
                    );
                })}
        </div>
    );
};

export default ProductGallery;
