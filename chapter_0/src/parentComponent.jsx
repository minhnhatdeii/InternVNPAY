import React,{Component} from "react";
import FirstChild from "./firstChild";
import { createRef } from "react";
class ParentComponent extends Component {
    constructor(props) {
    super(props);
    this.childRef = createRef(); // Cha khởi tạo ref
  }

  componentDidMount() {
    console.log(this.childRef.current.textContent); // Đọc nội dung từ con
  }
    render() {
        return (
        <h1>
            Toi la Parent Component!
            <FirstChild forwardedRef={this.childRef} /> {}
        </h1>
        );
    }
}
export default ParentComponent;