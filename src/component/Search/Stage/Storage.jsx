import {ImCheckmark} from "react-icons/im";
import {FaXmark} from "react-icons/fa6";

export default function Storage() {
    return (
        <div dir="rtl" className="min-h-screen flex flex-col justify-center text-center">
            <div className="

            ">

            </div>
            <div className="
                flex flex-col lg:flex-row justify-center
            ">
                <div className="
                    bg-secondary rounded-2xl
                    text-center flex flex-col justify-center
                ">
                    <p className="text-2xl">Filters...</p>
                    <p className="text-2xl">Filters...</p>
                    <p className="text-2xl">Filters...</p>
                    <p className="text-2xl">Filters...</p>
                </div>
                <div className="flex flex-col flex-grow">
                    {storages.map((storage, index) => (
                        <Card
                            show={true}
                            layout="list"
                            storage={storage}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Card({key, show, layout, storage}) {
    return (
        <div className={`
            ${show ? "flex" : "hidden"}
            rounded-xl my-5 mx-5 p-2
            bg-gray-100 border-gray-200 border-4
            transition-all duration-300
            hover:border-primary hover:z-10
        `}>
            <img src={storage.imageURL} alt={"Storage" + key} className="
                w-36 h-36 object-cover
                rounded-md
            "/>
            <div className={`
                flex-grow flex
                ${layout === "list" ? `
                    flex-row gap-10
                ` : layout === "grid" ? `
                    flex-col gap-4
                ` : ""}
                text-2xl font-bold
            `}>
                <p>{storage.location}</p>
                <p>{storage.size + " متر مربع"}</p>
                <p>{storage.price + " شيكل"}</p>
            </div>
            <div className="flex">

            </div>
        </div>
    );
}

function CheckMark({label}) {
    return (
        <div className="flex gap-4 bg-gradient-green">
            <ImCheckmark/>
            <p>{label}</p>
        </div>
    );
}

function XMark({label}) {
    return (
        <div className="flex gap-4 bg-gradient-green">
            <FaXmark/>
            <p>{label}</p>
        </div>
    );
}

const storages = [
    {
        size: 10, /* in m^2 */
        price: 1000, /* in nis */
        location: "نابلس",
        imageURL: "/images/examples/storages/storage1-min-min.jpg",
        partialOptionAvailable: true,
        temporalOptionAvailable: false
    },
    {
        size: 20,
        price: 2000,
        location: "رام الله",
        imageURL: "/images/examples/storages/storage2-min-min.jpg",
        partialOptionAvailable: false,
        temporalOptionAvailable: true
    },
    {
        size: 30,
        price: 3000,
        location: "طولكرم",
        imageURL: "/images/examples/storages/storage3-min-min.jpg",
        partialOptionAvailable: true,
        temporalOptionAvailable: true
    },
    {
        size: 40,
        price: 4000,
        location: "الخليل",
        imageURL: "/images/examples/storages/storage4-min-min.jpg",
        partialOptionAvailable: false,
        temporalOptionAvailable: false
    },
    {
        size: 50,
        price: 5000,
        location: "نابلس",
        imageURL: "/images/examples/storages/storage5-min-min.jpg",
        partialOptionAvailable: true,
        temporalOptionAvailable: false
    },
    {
        size: 60,
        price: 6000,
        location: "رام الله",
        imageURL: "/images/examples/storages/storage6-min-min.jpg",
        partialOptionAvailable: false,
        temporalOptionAvailable: true
    },
    {
        size: 70,
        price: 7000,
        location: "طولكرم",
        imageURL: "/images/examples/storages/storage7-min-min.jpg",
        partialOptionAvailable: true,
        temporalOptionAvailable: true
    },
    {
        size: 80,
        price: 8000,
        location: "الخليل",
        imageURL: "/images/examples/storages/storage8-min-min.jpg",
        partialOptionAvailable: false,
        temporalOptionAvailable: false
    },
    {
        size: 90,
        price: 9000,
        location: "نابلس",
        imageURL: "/images/examples/storages/storage9-min-min.jpg",
        partialOptionAvailable: true,
        temporalOptionAvailable: false
    },
    {
        size: 100,
        price: 10000,
        location: "الخليل",
        imageURL: "/images/examples/storages/storage10-min-min.jpg",
        partialOptionAvailable: false,
        temporalOptionAvailable: true
    }
];
