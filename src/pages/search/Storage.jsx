import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import React, {useEffect, useState} from "react";
import {FaArrowRightLong} from "react-icons/fa6";
import FormHandler from "../../utils/form/FormHandler";
import TextField, {ContinueButton} from "../../components/field/Field";
import {FormFinishedPage} from "../../components/page/Page";
import {getStorageById, getStorageImages} from "../../utils/api/StorageApi";

export default function StorageShowcase({initialData, onReturn}) {
    const [storage, setStorage] = useState(initialData);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        getStorageById(storage['_id'])
            .then(data => setStorage(data))
            .catch(error => console.error(error));
    }, []);

    return submitted ? <FormFinishedPage
        messages={[
            "تم طلب المخزن... سنتواصل معك في أقرب فرصة",
            "في حال واجهتك اية استفسارات يرجى التواصل معنا."
        ]}
    /> : (
        <div className="bg-back rounded-3xl border-4 border-gray-200 text-center">
            <div className="flex justify-center p-2">
                <button
                    onClick={onReturn}
                    className="
                        flex flex-wrap gap-2
                        font-bold text-primary hover:text-strong
                        items-center
                    "
                >
                    <FaArrowRightLong/>
                    الرجوع
                </button>
                <p className="flex-grow">طلب استئجار</p>
            </div>
            <hr/>
            <div className="
                py-8 lg:py-16 px-4 sm:px-8 lg:px-16 xl:px-24
                flex flex-col lg:flex-row lg:justify-around gap-8
            ">
                {storage['numberOfImages'] > 0 &&
                    <CarouselProvider
                        naturalSlideWidth="100"
                        naturalSlideHeight="100"
                        totalSlides={storage['numberOfImages']}
                        className="flex-grow flex flex-col gap-4 justify-center"
                    >
                        <Slider className="mx-auto w-full lg:max-w-xl rounded-xl border-4 border-gray-200">
                            {getStorageImages(storage['_id'], storage['numberOfImages'], storage['imageFormat'])
                                .map((image, index) => (
                                    <Slide index={index}><Image hasMasterSpinner={true} src={image}/></Slide>
                                ))}
                        </Slider>
                        <div className="
                            w-full flex justify-center gap-4
                            text-4xl lg:text-5xl xl:text-6xl
                        ">
                            <ButtonBack>
                                <BsArrowRightShort
                                    className="opacity-70 hover:opacity-100 transition-opacity border-2 border-black rounded-full"/>
                            </ButtonBack>
                            <ButtonNext>
                                <BsArrowLeftShort
                                    className="opacity-70 hover:opacity-100 transition-opacity border-2 border-black rounded-full"/>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>}
                <div className="
                    flex flex-col justify-around gap-8
                    text-xl lg:text-2xl xl:text-3xl text-center
                ">
                    <div className="flex flex-wrap items-center gap-4">
                        <p className="bg-gray-300 bg-opacity-50 rounded-full p-2 xl:p-4 w-full">
                            {`${storage['location']}${storage['sublocation'] ? ` - ${storage['sublocation']}` : ""}`}
                        </p>
                        <p className="bg-gray-300 bg-opacity-50 rounded-full p-2 xl:p-4 w-full">
                            {storage['size'] + " متر مربع"}
                        </p>
                    </div>
                    <FormHandler
                        name="storageOrderForm"
                        initialValues={{
                            materialType: '',
                            expectedRentalDuration: '',
                        }}
                        onSubmit={() => setSubmitted(true)}
                        className="shadow-2xl rounded-3xl px-4 py-8"
                    >
                        <TextField
                            label="نوع المواد المراد تخزينها"
                            name="materialType"
                            type="text"
                        />
                        <TextField
                            label="المدة المتوقعة للاستئجار"
                            name="expectedRentalDuration"
                            type="text"
                        />
                        <ContinueButton label="اطلب"/>
                    </FormHandler>
                </div>
            </div>
        </div>
    );
}