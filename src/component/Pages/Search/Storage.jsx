import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import storage1 from "../../../assets/images/background.jpeg";
import storage2 from "../../../assets/images/img15.png";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import React, {useState} from "react";
import {FaArrowRightLong} from "react-icons/fa6";
import {SimpleForm} from "../../Util/Form/Form";
import TextField from "../../Util/Form/Field";
import {ContinueButton} from "../../Util/Button/FormButton";
import {FormFinishedTemplate} from "../../Util/Page/Template";

export default function StorageShowcase({storage, onReturn}) {
    const [submitted, setSubmitted] = useState(false);

    return submitted ? <FormFinishedTemplate
        messages={[
            "تم طلب المخزن... سنتواصل مع في أقرب فرصة",
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
                <CarouselProvider
                    naturalSlideWidth="100"
                    naturalSlideHeight="100"
                    totalSlides="2"
                    className="flex-grow flex flex-col gap-4 justify-center"
                >
                    <Slider className="mx-auto w-full lg:max-w-xl rounded-xl border-4 border-gray-200">
                        <Slide index="0"><Image hasMasterSpinner src={storage1}/></Slide>
                        <Slide index="1"><Image hasMasterSpinner src={storage2}/></Slide>
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
                </CarouselProvider>
                <div className="
                    flex-grow flex flex-col justify-around gap-8
                    text-xl lg:text-2xl xl:text-3xl text-center
                ">
                    <div className="flex flex-wrap items-center gap-4">
                        <p className="bg-gray-300 bg-opacity-50 rounded-full p-2 xl:p-4 w-full">{storage['location']}</p>
                        <p className="bg-gray-300 bg-opacity-50 rounded-full p-2 xl:p-4 w-full">{storage['size'] + " متر مربع"}</p>
                    </div>
                    <SimpleForm
                        name="storageOrderForm"
                        initialValues={{
                            materialType: '',
                            expectedRentalDuration: '',
                        }}
                        onSubmit={() => setSubmitted(true)}
                    >
                        <div className="shadow-2xl rounded-3xl px-4 py-8">
                            <TextField
                                label="نوع المواد المراد تخزينها"
                                name="materialType"
                                type="text"
                            />
                            <TextField
                                label="المدة المتوقعة للاستئجار"
                                name="expectedRentalDuration"
                                type="number"
                            />
                            <ContinueButton label="اطلب"/>
                        </div>
                    </SimpleForm>
                </div>
            </div>
        </div>
    );
}