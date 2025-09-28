import {Hero} from "@/components";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import {fetchData} from "@/utils";
import CarCard from "@/components/CarCard";
import {fuels, yearsOfProduction} from "@/constants";

export default async function Home({searchParams}: { searchParams: any}) {
    const allCars = await fetchData({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || "",
    });    const isDataEmpty = allCars.length === 0;
  return (
    <main>
      <Hero/>
        <div className="mt-12 padding-x padding-y max-width" id={"discover"}>
            <div className={"home__text-container"}>
                <h1 className={"text-4xl font-extrabold"}> Car Catalogue</h1>
                <p>Explore the cars you might like</p>
            </div>
            <div className={"home__filters"}>
                <SearchBar />
                <div className={"home__filters-container"}>
                    <CustomFilter title={"fuel"} options={fuels}/>
                    <CustomFilter title={"year"} options={yearsOfProduction}/>
                </div>

                {!isDataEmpty ?
                    <div className={"home__cars-wrapper"}>
                        {allCars.map((car) => (
                            <CarCard key={car} car = {car} />
                        ))}
                    </div>
                    :
                    <div className={"home__cars-container"}>
                    <h2 className={"text-black text-xl font-bold"}>Oops, no results</h2>
                    <p>{allCars?.message}</p>
                    <div>
                </div>
                </div>}

            </div>
        </div>

    </main>
  );
}
