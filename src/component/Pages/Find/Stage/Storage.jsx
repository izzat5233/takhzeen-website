import useFilters from "../../../Util/Hook/Filters";
import Page from "../../../Util/Page/Page";
import FormButton from "../../../Util/Button/FormButton";
import {BsPlus} from "react-icons/bs";
import {ExpandedInOutBackground} from "../../../Util/Page/Background";

export default function Storage() {
    const [filteredData, filters, setFilters] = useFilters(storages);

    return (
        <Page background={<ExpandedInOutBackground/>}>
            <div className="flex flex-col justify-center p-8">
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                    <p className="text-xl py-2">البحث من خلال:</p>
                    <FilterButton label="المساحة"/>
                    <FilterButton label="الموقع"/>
                    <FilterButton label="السعر"/>
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
            </div>
        </Page>
    );
}

function FilterButton({label, choices}) {
    return (
        <button className="
            py-2 px-4 rounded transition-all
            text-lg lg:text-xl text-center
            shadow-md bg-back hover:scale-105
        ">
            <p>{label}:&emsp;الكل</p>
        </button>
    );
}

function Card({key, storage}) {
    return (
        <div className="
            flex justify-around transition-all
            my-5 mx-5 p-4 rounded-3xl
            bg-back shadow-xl hover:shadow-2xl
        ">
            <img
                src={storage.imageURL}
                alt={"Storage" + key}
                className="w-36 h-36 object-cover rounded-md"
            />
            <div className="flex-grow flex flex-col lg:flex-row gap-8">
                <div className={`
                lg:flex-grow flex flex-col xl:flex-row
                text-2xl text-center my-auto justify-around gap-4
            `}>
                    <p>{storage.location}</p>
                    <p>{storage.size + " متر مربع"}</p>
                    <p>{storage.price + " شيكل"}</p>
                </div>
                <FormButton
                    label="طلب استئجار"
                    icon={<BsPlus/>}
                    className="font-xl h-fit my-auto"
                />
            </div>
        </div>
    );
}

const storages = [
    {
        size: 10, /* in m^2 */
        price: 1000, /* in nis */
        location: "نابلس",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: true,
        temporalOptionAvailable: false
    },
    {
        size: 20,
        price: 2000,
        location: "رام الله",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: false,
        temporalOptionAvailable: true
    },
    {
        size: 30,
        price: 3000,
        location: "طولكرم",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: true,
        temporalOptionAvailable: true
    },
    {
        size: 40,
        price: 4000,
        location: "الخليل",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: false,
        temporalOptionAvailable: false
    },
    {
        size: 50,
        price: 5000,
        location: "نابلس",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: true,
        temporalOptionAvailable: false
    },
    {
        size: 60,
        price: 6000,
        location: "رام الله",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: false,
        temporalOptionAvailable: true
    },
    {
        size: 70,
        price: 7000,
        location: "طولكرم",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: true,
        temporalOptionAvailable: true
    },
    {
        size: 80,
        price: 8000,
        location: "الخليل",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: false,
        temporalOptionAvailable: false
    },
    {
        size: 90,
        price: 9000,
        location: "نابلس",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: true,
        temporalOptionAvailable: false
    },
    {
        size: 100,
        price: 10000,
        location: "الخليل",
        imageURL: "https://picsum.photos/200/300",
        partialOptionAvailable: false,
        temporalOptionAvailable: true
    }
];
