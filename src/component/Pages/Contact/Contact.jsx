import './contact.css';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
    return (
        
        <section id="section-wrapper">
            <div className="box-wrapper">
                <div className="info-wrap">
                    <h2 className="info-title">معلومات الاتصال </h2>
                    <h3 className="info-sub-title">املأ الطلب الآتي وفريقنا سيتواصل معك بأقرب وقت !</h3>
                    <ul className="info-details">
                        <li>
                            <span>رقم الهاتف : </span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                        </li>
                        <li>

                            <span>ايميل : </span> <a href="mailto:info@takhzeen.ps">info@ta5zeen.ps</a>
                        </li>
                        <li>

                            <span> الموقع :</span> <a href="http://ta5zeen.ps/">ta5zeen.ps</a>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/ta5zeen" target="_blank"><FiFacebook /></a></li>
                        <li><a href="https://twitter.com/TakhzeenPS" target="_blank"><FiTwitter /></a></li>
                        <li><a href="https://www.instagram.com/ta5zeen.ps/" target="_blank"><FiInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/company/takhzeen-ps/" target="_blank"><FiLinkedin /></a></li>

                    </ul>
                </div>
                <div className="form-wrap">
                    <form>
                        <h2 className="form-title"> أرسل رسالتك الآن وتواصل معنا : </h2>
                        <div className="form-fields">
                            <div className="form-group">
                                <input type="text" className="fname" placeholder="  اسم العائلة" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="lname" placeholder="الأسم الأول" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="email" placeholder="الايميل" />
                            </div>
                            <div className="form-group">
                                <input type="number" className="phone" placeholder="رقم الهاتف" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" id placeholder="اكتب رسالتك هنا" defaultValue={""} />
                            </div>
                        </div>
                        <input type="submit" defaultValue="Send Message" className="submit-button" />
                    </form>
                </div>
            </div>
            <div className='space'></div>
        </section>


    );
}
