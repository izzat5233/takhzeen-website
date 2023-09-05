import {Route, Routes} from "react-router-dom";
import Management from "./management/Management";
import Owner from "./owner/Owner";
import NotFound from "../misc/NotFound";

export default function Service() {
    return (
        <Routes>
            <Route path="management" element={<Management/>}/>
            <Route path="owner" element={<Owner/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
