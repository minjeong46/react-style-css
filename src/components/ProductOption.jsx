import { useState } from "react";
import starOutline from "../assets/star-outline.svg";
import starFull from "../assets/star.svg";

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

    const [color, setColor] = useState([
        { color: "white" },
        { color: "gray" },
        { color: "black" },
    ]);

    const bgColorMap = {
        white: "bg-white",
        gray: "bg-gray-400",
        black: "bg-black",
    };

    const [isSizeSeleted, setIsSizeSeleted] = useState(null);

    const onClickSize = (size) => {
        if (size.isOpen) {
            setIsSizeSeleted(size);
        }
    };

    return (
        <div className="flex-grow flex-shrink basis-0 pl-6 border-l border-gray-200">
            <div className="pb-8">
                <h2 className="text-3xl pb-6">$192</h2>
                <div className="flex">
                    <div className="flex">
                        <img className="w-[20px] h-[20px]" src={starFull} alt="꽉찬 별"/>
                        <img className="w-[20px] h-[20px]" src={starFull} alt="꽉찬 별"/>
                        <img className="w-[20px] h-[20px]" src={starFull} alt="꽉찬 별"/>
                        <img className="w-[20px] h-[20px]" src={starFull} alt="꽉찬 별"/>
                        <img className="w-[20px] h-[20px]" src={starOutline} alt="빈 별"/>
                    </div>
                    <span className="pl-2 [color:#584feb] -translate-y-1">
                        117 reviews
                    </span>
                </div>
            </div>
            <form>
                <div>
                    <label className="inline-block pb-3">Color</label>
                    <div>
                        {color.map((item) => {
                            return (
                                <span
                                    key={item.color}
                                    className={` ${
                                        item.color === "white"
                                            ? "border border-gray-400"
                                            : ""
                                    } 
                                    ${
                                        bgColorMap[item.color]
                                    } inline-block w-[30px] h-[30px] 
                                    rounded-2xl mr-3 cursor-pointer color-white`}
                                ></span>
                            );
                        })}
                    </div>
                </div>
                <div className="py-6">
                    <div className="flex justify-between pb-3">
                        <label>Size</label>
                        <span className="[color:#584feb]">Size guide</span>
                    </div>
                    <ul className="grid grid-cols-4 grid-rows-2 gap-4">
                        {size.map((size) => {
                            const isSeleted =
                                isSizeSeleted?.value === size.value;
                            return (
                                <li
                                    className={`${
                                        size.isOpen === false
                                            ? "cursor-no-drop bg-gray-200"
                                            : "bg-white"
                                    } ${
                                        isSeleted
                                            ? "border-2 [border-color:#584feb]"
                                            : " border-gray-400"
                                    } border h-20  rounded-lg flex justify-center items-center cursor-pointer`}
                                    isSeleted={isSeleted}
                                    isOpen={size.isOpen}
                                    key={size.value}
                                    onClick={() => onClickSize(size)}
                                >
                                    {size.value}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button
                    className="w-full py-4 flex justify-center items-center [background-color:#584feb] 
                    border-none rounded-lg text-white text-base cursor-pointer hover:[background-color:#5143d1] transition-all transition-discrete"
                    type="submit"
                >
                    Add to bag
                </button>
            </form>
        </div>
    );
};

export default ProductOption;
