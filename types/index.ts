import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    containerStyles?: string;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface ManufacturingProps {
    manufacturer: string;
    setManufacturer: (value: string) => void;
}

export interface CarProps{
    city_mpg:number
    class:string
    combination_mpg:string
    cylinders:number
    displacement:number
    drive:string
    fuel_type:string
    highway_mpg:string
    make:string
    model:string
    transmission:string
    year:number
}

export interface FilterProps{
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps{
    title: string;
    options: OptionProps[];
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}