import {CarProps} from "@/types";
import {FilterProps} from "@/types";

export async function fetchData(filters: FilterProps) {
    const { manufacturer, year, model, fuel } = filters;
    const headers =  {
        'x-rapidapi-key': '624985df63msh827de94dbef3ecep10ec10jsnf5a4ca0e624c',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
        {
            headers: headers,
        }
    );

    const result = await response.json();
    console.log(result)
    return result;
}




export const calculateCarRent = (year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make, year, model} = car;
    url.searchParams.append('customer', "img");
    url.searchParams.append('make', make);
    url.searchParams.append('model', model.split(' ')[0]);
    url.searchParams.append('zoomType', "fullscreen");
    url.searchParams.append('angle', angle || '0');
    url.searchParams.append('modelYear', `${year}`);
    return url.toString();
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};