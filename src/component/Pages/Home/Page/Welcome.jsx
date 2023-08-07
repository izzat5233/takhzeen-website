import Page from "../../../Util/Page/Page";
import {Link} from "react-router-dom";
import storage from "../../../../assets/images/storage.png";
import React from "react";

const WelcomePage = ({...rest}) => (
    <Page {...rest}>
        <div className="header section__padding" id="Home">
            <div className="header-content" style={{textAlign: "right"}}>
                <h1 className="gradient__text"> مرحبًا بك في شركة تخزين!</h1>
                <p> نعمل الى جانب كلاً من المستأجرين والمؤجرين، نواجه ما يعانوه من تحديات من خلال خلقنا لحلول
                    تخزينية مبتكرة.</p>
                <div className="header-content__input">
                    <button type="button"><Link to="/find">ابحث عن مخزنك</Link></button>
                    <button type="button"><Link to="/owner">اعرض مخزنك</Link></button>
                    <button type="button"><Link to="/management"> لِنُدر لك مخزنك</Link></button>
                </div>
            </div>
            <div className="header-image">
                <img src={storage} alt="Storage Company"/>
            </div>
        </div>
    </Page>
);

export default WelcomePage;
