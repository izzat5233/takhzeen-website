import useFilters from "../../Util/Hook/Filters";
import Page from "../../Util/Page/Page";
import {BsPlus} from "react-icons/bs";
import {ExpandedInOutBackground} from "../../Util/Page/Background";
import {BiSolidDownArrow} from "react-icons/bi";
import {useEffect, useState} from "react";
import {getStorages} from "../../Util/Api/StorageApi";
import SmallButton from "../../Util/Button/SmallButton";

export default function Search() {
    const [storages, setStorages] = useState([]);
    const [filteredData, filters, setFilters] = useFilters(storages);
    const [areaChoice, setAreaChoice] = useState(null);
    const [locationChoice, setLocationChoice] = useState(null);
    const [priceChoice, setPriceChoice] = useState(null);

    useEffect(() => {
        getStorages()
            .then(data => setStorages(data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        let filter = {}
        if (areaChoice && (areaChoice !== "الكل")) {
            let range = areaChoice.split("-");
            filter.size = (size) => (Number(range[0]) <= size && size <= Number(range[1]));
        }
        if (locationChoice && (locationChoice !== "الكل")) {
            filter.location = (location) => locationChoice === location;
        }
        if (priceChoice && (priceChoice !== "الكل")) {
            let range = priceChoice.split("-");
            filter.price = (price) => (Number(range[0]) <= price && price <= Number(range[1]));
        }
        setFilters(filter);
    }, [areaChoice, locationChoice, priceChoice]);

    return (
        <Page background={<ExpandedInOutBackground/>} className="px-dynamic py-dynamic">
            <div className="flex flex-wrap flex-initial justify-center gap-8 mb-8">
                <p className="text-xl py-2">البحث من خلال:</p>
                <FilterButton
                    title="المساحة"
                    labels={[
                        "الكل",
                        "10 - 20",
                        "20 - 40",
                        "40 - 80",
                        "80 - 100"
                    ]}
                    currentLabel={areaChoice}
                    setCurrentLabel={setAreaChoice}
                />
                <FilterButton
                    title="الموقع"
                    labels={[
                        "الكل",
                        "نابلس",
                        "رام الله",
                        "طولكرم",
                        "الخليل"
                    ]}
                    currentLabel={locationChoice}
                    setCurrentLabel={setLocationChoice}
                />
                <FilterButton
                    title="السعر"
                    labels={[
                        "الكل",
                        "1000 - 2000",
                        "2000 - 4000",
                        "4000 - 8000",
                        "8000 - 10000"
                    ]}
                    currentLabel={priceChoice}
                    setCurrentLabel={setPriceChoice}
                />
            </div>
            <div className="flex flex-col flex-grow">
                {filteredData.map((storage, index) => (
                    <Card
                        layout="list"
                        storage={storage}
                        key={index}
                    />
                ))}
            </div>
        </Page>
    );
}

function FilterButton({title, labels, currentLabel, setCurrentLabel}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="
                py-2 px-4 h-fit
                flex flex-col justify-center
                rounded transition-all
                text-lg lg:text-xl text-center
                shadow-md bg-back hover:scale-105
        ">
            <div className="flex gap-4">
                <p>{title}{currentLabel && ":"}&emsp;{currentLabel}</p>
                <BiSolidDownArrow className={`my-auto transition-transform duration-300 ${expanded && "rotate-180"}`}/>
            </div>
            {expanded &&
                <div className="flex flex-col gap-1 mt-4 w-full">
                    {labels && labels.map((label) => (
                        <p
                            onClick={() => setCurrentLabel(label)}
                            className="hover:bg-gray-200 mx-auto py-2 w-full h-full"
                        >
                            {label}
                        </p>
                    ))}
                </div>}
        </button>
    );
}

function Card({key, storage}) {
    return (
        <div className="
            flex justify-around transition-all
            my-5 mx-5 p-4 rounded-3xl
            bg-back shadow-xl
        ">
            <img
                src={storage['imageURL']}
                alt={"Storage" + key}
                className="w-36 h-36 object-cover rounded-md"
            />
            <div className="flex-grow flex flex-col lg:flex-row gap-8">
                <div className={`
                lg:flex-grow flex flex-col xl:flex-row
                text-2xl text-center my-auto justify-around gap-4
            `}>
                    <p>{storage['location']}</p>
                    <p>{storage['size'] + " متر مربع"}</p>
                    <p>{storage['price'] + " شيكل"}</p>
                </div>
                <SmallButton
                    label="طلب استئجار"
                    icon={<BsPlus/>}
                    className="font-xl h-fit my-auto"
                />
            </div>
        </div>
    );
}
