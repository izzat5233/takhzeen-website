import useFilters from "../../Util/Hook/Filters";
import Page from "../../Util/Page/Page";
import {BsPlus} from "react-icons/bs";
import {ExpandedInOutBackground} from "../../Util/Page/Background";
import {BiSolidDownArrow} from "react-icons/bi";
import {useEffect, useState} from "react";
import {getStorageImages, getStorages} from "../../Util/Api/StorageApi";
import SmallButton from "../../Util/Button/SmallButton";
import StorageShowcase from "./Storage";
import placeholder from "../../../assets/images/warehouse.png";

export default function Search() {
    const [storages, setStorages] = useState([]);
    const [filteredData, filters, setFilters] = useFilters(storages);
    const [areaChoice, setAreaChoice] = useState(null);
    const [locationChoice, setLocationChoice] = useState(null);

    useEffect(() => {
        getStorages([
            "size",
            "location",
            "sublocation",
            "numberOfImages",
            "imageFormat"
        ])
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
        setFilters(filter);
    }, [areaChoice, locationChoice]);

    const [selectedStorage, setSelectedStorage] = useState(null);

    return (
        <Page background={<ExpandedInOutBackground/>} className="px-dynamic py-dynamic">
            {selectedStorage === null && <>
                <div className="flex flex-wrap flex-initial justify-center gap-8 mb-8">
                    <p className="text-xl py-2">البحث من خلال:</p>
                    <FilterButton
                        title="المساحة"
                        labels={[
                            "الكل",
                            "0 - 100",
                            "100 - 200",
                            "200 - 300",
                            "300 - 400",
                            "400 - 500"
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
                </div>
                <div className="flex flex-col flex-grow">
                    {filteredData.map((storage, index) => (
                        <Card
                            layout="list"
                            storage={storage}
                            key={index}
                            onSubmit={() => setSelectedStorage(storage)}
                        />
                    ))}
                </div>
            </>}
            {selectedStorage &&
                <StorageShowcase
                    initialData={selectedStorage}
                    onReturn={() => setSelectedStorage(null)}
                />}
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

function Card({key, storage, onSubmit}) {
    return (
        <div className="
            flex flex-wrap justify-around items-center
            my-4 p-2 sm:p-4 gap-12
            rounded-2xl sm:rounded-3xl bg-back shadow-xl
            text-xl lg:text-xl xl:text-2xl text-center
        ">
            <img
                src={storage['numberOfImages'] > 0
                    ? getStorageImages(storage['_id'], 1, storage['imageFormat'])[0]
                    : placeholder}
                alt={"Storage" + key}
                className="w-44 h-44 object-cover rounded-xl drop-shadow-xl border-4 border-gray-300"
            />
            <div className="flex flex-wrap items-center gap-4">
                <p className="bg-gray-300 bg-opacity-50 rounded-full p-2 xl:p-4 w-full">
                    {`${storage['location']}${storage['sublocation'] ? ` - ${storage['sublocation']}` : ""}`}
                </p>
                <p className="bg-gray-300 bg-opacity-50 rounded-full p-2 xl:p-4 w-full">
                    {storage['size'] + " متر مربع"}
                </p>
            </div>
            <SmallButton
                label="طلب استئجار"
                icon={<BsPlus/>}
                className="whitespace-nowrap flex-wrap-reverse"
                onClick={onSubmit}
            />
        </div>
    );
}
