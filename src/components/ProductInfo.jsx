import React from "react";
import styled from "styled-components";

const ProductInfo = () => {
    return (
        <ProductBottomLeft>
            <H1>Basic Tee 6-Pack</H1>
            <Section>
                <Sentence>
                    The Basic Tee 6-Pack allows you to fully express your
                    vibrant personality with three grayscale options. Feeling
                    adventurous? Put on a heather gray tee. Want to be a
                    trendsetter? Try our exclusive colorway: "Black". Need to
                    add an extra pop of color to your outfit? Our white tee has
                    you covered.
                </Sentence>
            </Section>
            <Section>
                <H5>Highlights</H5>
                <ProductInfoList>
                    <ProductInfoListLi>
                        Hand cut and sewn locally
                    </ProductInfoListLi>
                    <ProductInfoListLi>
                        Dyed with our proprietary colors
                    </ProductInfoListLi>
                    <ProductInfoListLi>
                        Pre-washed & pre-shrunk
                    </ProductInfoListLi>
                    <ProductInfoListLi>
                        Ultra-soft 100% cotton
                    </ProductInfoListLi>
                </ProductInfoList>
            </Section>
            <Section>
                <H5>Details</H5>
                <Sentence2>
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    "Charcoal Gray" limited release.
                </Sentence2>
            </Section>
        </ProductBottomLeft>
    );
};

export default ProductInfo;

const ProductBottomLeft = styled.div`
    flex: 2;
    padding-right: 1.5rem;
`;

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`;

const Sentence = styled.p`
    word-spacing: 0.2rem;
    line-height: 1.2rem;
`;

const Sentence2 = styled.p`
    word-spacing: 0.2rem;
    line-height: 1.2rem;
    font-size: 0.9rem;
    color: #666;
`;

const Section = styled.section`
    padding-top: 2rem;
`;

const H5 = styled.h5`
    padding-bottom: 1.5rem;
`;

const ProductInfoList = styled.ul`
    list-style: inside;
`;

const ProductInfoListLi = styled.li`
    padding-bottom: 0.6rem;
    color: #666;

    &:last-child {
        padding-bottom: 0rem;
    }
`;
