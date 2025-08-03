import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "./ProductOption.css";

const ProductOption = () => {
    return (
        <div className="productBottom-right">
            <div className="productOption-top">
                <h2>$192</h2>
                <div className="review-star">
                    <div className="star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <span className="review-count">117 reviews</span>
                </div>
            </div>
            <form className="productOption-bottom">
                <div>
                    <label className="label-color">Color</label>
                    <div className="color-picker-box">
                        <i className="color-picker color-white"></i>
                        <i className="color-picker color-gray"></i>
                        <i className="color-picker color-black"></i>
                    </div>
                </div>
                <div className="size-box">
                    <div className="label-size">
                        <label>Size</label>
                        <span className="label-size-color">Size guide</span>
                    </div>
                    <ul className="size-check-box">
                        <li className="size size-xxs">XXS</li>
                        <li className="size size-xs">XS</li>
                        <li className="size size-s">S</li>
                        <li className="size size-m">M</li>
                        <li className="size size-l">L</li>
                        <li className="size size-xl">XL</li>
                        <li className="size size-2xl">2XL</li>
                        <li className="size size-3xl">3XL</li>
                    </ul>
                </div>
                <button className="submit-btn" type="submit">Add to bag</button>
            </form>
        </div>
    );
};

export default ProductOption;
