"use client"
import Image from "next/image";
import {CarProps, CustomButtonProps} from "@/types";
import {calculateCarRent, generateCarImageUrl} from "@/utils";
import {useState} from "react";
import CarDetails from "@/components/CarDetails";

interface CarCardProps {
    car: CarProps;
}

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 ${containerStyles}`}
    >
      <span className={textStyles}>{title}</span>
      {rightIcon && (
        <Image
          src={rightIcon}
          alt="right arrow"
          width={16}
          height={16}
          className="object-contain"
        />
      )}
    </button>
  );
};

const CarCard = ({car}: CarCardProps) => {
    const {city_mpg, drive, fuel_type, make, model, transmission, year} = car;
    const carRent = calculateCarRent(year);
    console.log(carRent, city_mpg, year)
    const [isOpen, setIsOpen] = useState(false);

    return <div className={"car-card group"}>
        <div className={"car-card__content"}>
            <h2>{make} {model}</h2>
        </div>

        <p className={"flex mt-6 text-[32px] font-extrabold"}>
            <span className={"self-start text-[14px] font-semibold"}>
                $
            </span>
                {carRent}
            <span className={"self-end text-[14px] font-medium"}>
                /day
            </span>
        </p>

        <div className={"relative w-full object-contain h-40 my-3"}>
            <Image src={generateCarImageUrl(car)} alt={"car model"} fill priority className={"object-contain"}></Image>
        </div>

        <div className={"relative flex w-full mt-2"}>
            <div className={"flex group-hover:invisible w-full justify-between text-gray"}>
                <div className={"flex flex-col justify-center items-center gap-2"}>
                    <Image src={"/steering-wheel.svg"} width={20} height={20} alt={"steering wheel"}></Image>
                     <p className={"text-[14px]"}>
                         {transmission === 'a' ? 'Automatic' : 'Manual'}
                     </p>
                </div>
                <div className={"flex flex-col justify-center items-center gap-2"}>
                    <Image src={"/tire.svg"} width={20} height={20} alt={"steering wheel"}></Image>
                    <p className={"text-[14px]"}>
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className={"flex flex-col justify-center items-center gap-2"}>
                    <Image src={"/gas.svg"} width={20} height={20} alt={"steering wheel"}></Image>
                    <p className={"text-[14px]"}>
                        {fuel_type.toUpperCase()}
                    </p>
                </div>
            </div>


            <div className="car-card__btn-container">
                <CustomButton
                    title='View More'
                    containerStyles='w-full py-[16px] rounded-full bg-blue-500'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon='/right-arrow.svg'
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>

        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} setIsOpen={setIsOpen} car={car}/>
    </div>
}

export default CarCard;