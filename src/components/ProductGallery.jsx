import { useState } from "react";
import teeBox from "../assets/tee-1.webp";
import teeBlack from "../assets/tee-2.webp";
import teeGray from "../assets/tee-3.webp";
import teeWhite from "../assets/tee-4.webp";

const ProductGallery = () => {
    const [productImg, setProductImg] = useState([
        { src: teeBox, alt: "티 모음" },
        { src: teeBlack, alt: "티 검정" },
        { src: teeGray, alt: "티 회색" },
        { src: teeWhite, alt: "티 흰색" },
    ]);

    return (
        <div className="grid grid-cols-3 grid-rows-1 gap-8 pb-8">
            {productImg &&
                productImg.map((img) => {
                    return (
                        <div key={img.alt} className="overflow-hidden rounded-lg gallery-item">
                            <img className="rounded-lg" src={img.src} alt={img.alt} fetchpriority="high" />
                        </div>
                    );
                })}
        </div>
    );
};

export default ProductGallery;
