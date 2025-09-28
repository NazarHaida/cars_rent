"use client"
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

const Hero = () => {
    const handleScroll = () => {
    };
    return (
        <div className="hero overflow-hidden ">
            <div className="flex-1 pt-36 padding-x">
                <p className="hero__title">Rent a car with ease!</p>

                <p className="hero__subtitle">
                    Streamline your car booking experience with our easy-to-use app.
                </p>

                <CustomButton title="Get Started" handleClick={handleScroll}
                              containerStyles="bg-blue-500 text-white rounded-full px-2 py-1 mt-10"/>
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" fill alt="hero" className="object-contain"/>
                </div>
                    <div
                        className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 -z-10 w-full xl:h-screen h-[590px] overflow-hidden bg-[url('/hero-bg.png')] bg-repeat-round">

                    </div>

            </div>
        </div>
    )
}

export default Hero;