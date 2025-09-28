"use client"
import SearchManufacturer from "@/components/SearchManufacturer";
import React, {useState} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
const SearchButton = ({otherClasses}: {otherClasses: string}) => {
    return <button type={"submit"} className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src={"/magnifying-glass.svg"} alt={"magnifying glass"} width={40} height={40} className={"object-contain"}></Image>
    </button>
}

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState<string>("")
    const [model, setModel] = useState<string>("")
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(manufacturer === "" && model === "") {
            return alert("Please enter a search term")
        }

    updateSearchParamd(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParamd = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (model !== "") {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }
        if (manufacturer !== "") {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }
        const newPathName = window.location.pathname + "?" + searchParams.toString();
        router.push(newPathName);
    }

    return (
        <form action="" className={"searchbar"} onSubmit={handleSearch}>
            <div className={"searchbar__item"}>
            <SearchManufacturer
            manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <SearchButton otherClasses={"sm:hidden"} />
            </div>
            <div className={"searchbar__item"}>
                <Image src={"/model-icon.png"} alt={"car model"} width={25} height={25} className={"absolute w-[20px] h-[20px] ml-4"}></Image>
                <input type="text" name="model" id="model" value={model} className={"searchbar__input"} onChange={(e) => setModel(e.target.value)} placeholder={"Search by model"} />
            <SearchButton otherClasses={"sm:hidden"}></SearchButton>
            </div>
            <SearchButton otherClasses={"sm:hidden max-sm:hidden"}></SearchButton>

        </form>
    )
}

export default SearchBar;