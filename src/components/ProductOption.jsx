import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";

const ProductOption = () => {
    const [size, setSize] = useState([
        { value: "XXS", isOpen: false },
        { value: "XS", isOpen: true },
        { value: "S", isOpen: true },
        { value: "M", isOpen: true },
        { value: "L", isOpen: true },
        { value: "XL", isOpen: true },
        { value: "2XL", isOpen: true },
        { value: "3XL", isOpen: true },
    ]);

    const [isSizeSeleted, setIsSizeSeleted] = useState(null);

    const onClickSize = (size) => {
        setIsSizeSeleted(size);
    };

    return (
        <ProductBottomRight>
            <ProductOptionTop>
                <Price>$192</Price>
                <ReviewStar>
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <ReviewCount>117 reviews</ReviewCount>
                </ReviewStar>
            </ProductOptionTop>
            <form>
                <div>
                    <LabelColor>Color</LabelColor>
                    <div>
                        <ColorPicker color="white"></ColorPicker>
                        <ColorPicker color="gray"></ColorPicker>
                        <ColorPicker color="black"></ColorPicker>
                    </div>
                </div>
                <SizeBox>
                    <LabelSize>
                        <label>Size</label>
                        <LabelSizeColor>Size guide</LabelSizeColor>
                    </LabelSize>
                    <SizeCheckBox>
                        {size.map((size) => {
                            const isSeleted =
                                isSizeSeleted?.value === size.value;
                            return (
                                <Size
                                    isSeleted={isSeleted}
                                    isOpen={size.isOpen}
                                    key={size.value}
                                    onClick={() => onClickSize(size)}
                                >
                                    {size.value}
                                </Size>
                            );
                        })}
                    </SizeCheckBox>
                </SizeBox>
                <SubmitBtn type="submit">Add to bag</SubmitBtn>
            </form>
        </ProductBottomRight>
    );
};

export default ProductOption;

const ProductBottomRight = styled.div`
    flex: 1;
    padding-left: 1.5rem;
    border-left: 1px solid #ddd;
`;

const ProductOptionTop = styled.div`
    padding-bottom: 2rem;
`;

const Price = styled.h2`
    font-size: 2rem;
    padding-bottom: 1.5rem;
`;

const ReviewStar = styled.div`
    display: flex;
`;

const ReviewCount = styled.span`
    padding-top: 0.1rem;
    padding-left: 0.5rem;
    color: #584feb;
`;

const SizeBox = styled.div`
    padding: 1.5rem 0;
`;
const LabelSize = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.85rem;
`;

const LabelSizeColor = styled.span`
    color: #584feb;
`;

const SizeCheckBox = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
`;

const Size = styled.li`
    height: 5rem;
    border: 1.5px solid ${({ isSeleted }) => (isSeleted ? "#584feb" : "#ddd")};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;

    ${(props) =>
        props.isOpen &&
        `
            &:hover {
                background-color: #fafafa;
            }
    `}

    ${(props) =>
        !props.isOpen &&
        `
            background-color: #eee;
            color: #aaa;
            cursor: no-drop;
    `}
`;

const LabelColor = styled.label`
    display: inline-block;
    padding-bottom: 0.85rem;
`;

const ColorPicker = styled.i`
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 0.85rem;
    cursor: pointer;
    background-color: ${({ color }) => color};
    border: ${({ color }) => (color === "white" ? "1px solid #555" : "none")};
`;

const SubmitBtn = styled.button`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #584feb;
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }
`;
