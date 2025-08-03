import React from "react";
import teeBox from "../assets/tee-1.png";
import teeBlack from "../assets/tee-2.png";
import teeGray from "../assets/tee-3.png";
import teeWhite from "../assets/tee-4.png";
import styled from "styled-components";

const ProductGallery = () => {
    return (
        <GalleryContainer>
            <GalleryItem>
                <Img src={teeBox} alt="티 모음" />
            </GalleryItem>
            <GalleryItem>
                <Img src={teeBlack} alt="티 검정" />
            </GalleryItem>
            <GalleryItem>
                <Img src={teeGray} alt="티 회색" />
            </GalleryItem>
            <GalleryItem>
                <Img src={teeWhite} alt="티 흰색" />
            </GalleryItem>
        </GalleryContainer>
    );
};

export default ProductGallery;

const GalleryContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 2rem;
    padding-bottom: 2rem;
`;

const GalleryItem = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 0.5rem;

    &:nth-child(1) {
        grid-row: 1 / span 2;
        grid-column: 1;
    }
    &:nth-child(2) {
        grid-row: 1;
        grid-column: 2;
    }
    &:nth-child(3) {
        grid-row: 2;
        grid-column: 2;
    }
    &:nth-child(4) {
        grid-row: 1 / span 2;
        grid-column: 3;
    }
`;

const Img = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
`;
