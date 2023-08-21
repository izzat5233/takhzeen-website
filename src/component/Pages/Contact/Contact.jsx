import './contact.css';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import {SimpleForm} from "../../Util/Form/Form";
import {Field} from "formik";

export default function Contact() {
    return (
        <section id="section-wrapper" className="min-h-screen">
            <div className="box-wrapper">
                <div className="info-wrap">
                    <h2 className="info-title">معلومات الاتصال </h2>
                    <h3 className="info-sub-title">املأ الطلب الآتي وفريقنا سيتواصل معك بأقرب وقت !</h3>
                    <ul className="info-details">
                        <li>
                            <span>رقم الهاتف : </span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                        </li>
                        <li>

                            <span>ايميل : </span> <a href="mailto:info@takhzeen.ps">info@takhzeen.ps</a>
                        </li>
                        <li>

                            <span> الموقع :</span> <a href="https://takhzeen.ps/">takhzeen.ps</a>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/ta5zeen" target="_blank"><FiFacebook /></a></li>
                        <li><a href="https://twitter.com/TakhzeenPS" target="_blank"><FiTwitter /></a></li>
                        <li><a href="https://www.instagram.com/takhzeen.ps/" target="_blank"><FiInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/company/takhzeen-ps/" target="_blank"><FiLinkedin /></a></li>

                    </ul>
                </div>
                <div className="form-wrap">
                    <SimpleForm
                        name="contactForm"
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            message: ''
                        }}
                        onSubmit={() => {
                        }}
                    >
                        <h2 className="form-title"> أرسل رسالتك الآن وتواصل معنا : </h2>
                        <div className="form-fields">

                            <div className="form-group">
                                <Field type="text" className="lname input" placeholder=" الأسم " name="name"/>
                            </div>
                            <div className="form-group">
                                <Field type="email" className="email input" placeholder="الايميل" name="email" />
                            </div>
                            <div className="form-group">
                                <Field type="number" className="phone input" placeholder="رقم الهاتف" name="phone" />
                            </div>
                            <div className="form-group">
                                <Field type="textarea" className="textarea" name="message" id placeholder="اكتب رسالتك هنا" />
                            </div>
                        </div>
                        <input type="submit" defaultValue="Send Message" className="submit-button" value="ارسل"/>
                    </SimpleForm>
                </div>
            </div>
            <div className='space'></div>
        </section>


    );
}