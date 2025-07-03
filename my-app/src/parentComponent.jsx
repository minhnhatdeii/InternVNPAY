import React,{Component} from "react";
import FirstChild from "./firstChild";

class ParentComponent extends Component {
    render() {
        return (
        <h1>
            Toi la Parent Component!
            <FirstChild /> {}
        </h1>
        );
    }
}
export default ParentComponent;