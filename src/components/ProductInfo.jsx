import React from "react";

const ProductInfo = () => {
    return (
        <div className="flex-grow-[2] flex-shrink basis-0">
            <h1 className="text-3xl font-bold">Basic Tee 6-Pack</h1>
            <section className="pt-8">
                <p className="[word-spacing:0.2rem] leading-5">
                    The Basic Tee 6-Pack allows you to fully express your
                    vibrant personality with three grayscale options. Feeling
                    adventurous? Put on a heather gray tee. Want to be a
                    trendsetter? Try our exclusive colorway: "Black". Need to
                    add an extra pop of color to your outfit? Our white tee has
                    you covered.
                </p>
            </section>
            <section className="pt-8">
                <h5 className="pb-6">Highlights</h5>
                <ul className="list-disc pl-5">
                    <li className="pb-2 text-gray-500">Hand cut and sewn locally</li>
                    <li className="pb-2 text-gray-500">Dyed with our proprietary colors</li>
                    <li className="pb-2 text-gray-500">Pre-washed & pre-shrunk</li>
                    <li className=" text-gray-500">Ultra-soft 100% cotton</li>
                </ul>
            </section>
            <section className="pt-8">
                <h5 className="pb-6">Details</h5>
                <p className="[word-spacing:0.2rem] leading-5 text-gray-500">
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
