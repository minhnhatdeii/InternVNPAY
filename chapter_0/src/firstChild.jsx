import React from "react";
import { useEffect } from "react";

const FirstChild = ({forwardedRef}) => {
    useEffect(() => {
    if (forwardedRef?.current) {
      forwardedRef.current.style.color = "red"; // ví dụ đổi màu từ trong con
    }
  }, [forwardedRef]);
    return <p ref = {forwardedRef}>Toi la First CHild</p>;
};
export default FirstChild;