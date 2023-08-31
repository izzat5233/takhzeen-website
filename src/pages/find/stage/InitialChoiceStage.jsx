import {BigButton} from "../../../components/button/Button";
import temporary from "../../../assets/icons/black/temporary.png";
import partial from "../../../assets/icons/black/partial.png";
import mediation from "../../../assets/icons/black/mediation.png";
import {BigChoicePage} from "../../../components/page/Page";
import {ExpandedInOutBackground, withBackground} from "../../../components/background/Background";

function InitialChoiceStage({navigate}) {
    return (
        <BigChoicePage
            title="ما الخدمة التي ترغب بالاستفادة منها ؟"
            className="py-dynamic lg:w-fit mx-auto"
        >
            <BigButton
                label="التخزين الوجيز"
                icon={temporary}
                onClick={() => navigate("./temporal")}
            />
            <BigButton
                label="التخزين الجزئي"
                icon={partial}
                onClick={() => navigate("./partial")}
            />
            <BigButton
                label="التخزين لفترة طويلة"
                icon={mediation}
                onClick={() => navigate("./mediation")}
            />
        </BigChoicePage>
    );
}

export default withBackground(InitialChoiceStage, <ExpandedInOutBackground/>);