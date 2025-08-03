import React from "react";
import "./ProductInfo.css";

const ProductInfo = () => {
    return (
        <div className="productBottom-left">
            <h1>Basic Tee 6-Pack</h1>
            <section>
                <p>
                    The Basic Tee 6-Pack allows you to fully express your
                    vibrant personality with three grayscale options. Feeling
                    adventurous? Put on a heather gray tee. Want to be a
                    trendsetter? Try our exclusive colorway: "Black". Need to
                    add an extra pop of color to your outfit? Our white tee has
                    you covered.
                </p>
            </section>
            <section>
                <h5>Highlights</h5>
                <ul className="productInfo-list">
                    <li>Hand cut and sewn locally</li>
                    <li>Dyed with our proprietary colors</li>
                    <li>Pre-washed & pre-shrunk</li>
                    <li>Ultra-soft 100% cotton</li>
                </ul>
            </section>
            <section>
                <h5>Details</h5>
                <p>
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    "Charcoal Gray" limited release.
                </p>
            </section>
        </div>
    );
};

export default ProductInfo;
