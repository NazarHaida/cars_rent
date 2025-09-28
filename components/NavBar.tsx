import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

const NavBar = () => {
    return <header className="w-full absoute z-10 bg-transparent">
        <nav className="max-w-[1440px] mx-auto flex justify-between items sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-between items-center">
                <Image src="/logo.svg" alt="Logo" width={118} height={18} className="object-contain"></Image>
            </Link>
            <CustomButton title="Get Started" btnType="button" containerStyles="text-white rounded-full bg-blue-500 min-w-[130px]"/>
        </nav>
    </header>
}

export default NavBar;