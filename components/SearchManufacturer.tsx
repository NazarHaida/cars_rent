"use client"
import {ManufacturingProps} from "@/types";
import {Combobox, Transition} from "@headlessui/react";
import Image from "next/image";
import {Fragment, useState} from "react";
import {manufacturers} from "@/constants";
import { CheckIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";

const SearchManufacturer = ({manufacturer, setManufacturer }: ManufacturingProps) => {
    const [query, setQuery] = useState("")
    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter(manufacturer => manufacturer.includes(query))

    return (
        <div className={"search-manufacturer"}>
            <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
                <Combobox.Button className={"absolute top-[14px]"}>
                    <Image src={"/car-logo.svg"} alt={"Logo"} className="ml-4" width={20} height={20} />
                </Combobox.Button>
                <Combobox.Input
                    displayValue={(manufacturer: string)=> manufacturer}
                    onChange={(e) => setQuery(e.target.value)}
                    className={"search-manufacturer__input"}
                    placeholder={"Search by manufacturer"}
                />

                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Combobox.Options className={"search-manufacturer__options"}>
                        { filteredManufacturers.map((item) => (
                            <Combobox.Option value={item} key={item} className={({active}) => `relative search-manufacturer__option ${active ? 'bg-blue-500 text-white' : 'text-gray-500'}`}>
                                {({selected }) => (
                                    <div className={clsx('group flex gap-2')}>
                                        {selected && <CheckIcon className="size-5" />}
                                        {item}
                                    </div>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </Transition>
            </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer;