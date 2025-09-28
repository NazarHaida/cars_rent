"use client"

import React from "react";
import {CustomButtonProps} from "@/types";
import Image from "next/image";

const CustomButton: React.FC<CustomButtonProps> = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled}) => {
    return(
        <button type={btnType || "button"} onClick={handleClick} className={`custom-btn ${containerStyles}`}>
          <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && <div className={"relative w-6 h-6"}>
                <Image src={rightIcon} alt={"right icon"} fill className={"object-contain"}></Image>
            </div>}
        </button>
    )

}

export default CustomButton;