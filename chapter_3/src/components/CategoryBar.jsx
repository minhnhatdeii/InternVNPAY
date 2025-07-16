import "../styles/CategoryBar.css"
import { useRef, useState, useEffect } from "react";
import { categories } from "../datas/categoryData";

function CategoryBar({isExpand}) {
  const [indexChooseCategory, setIndexChooseCategory] = useState(0);
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [categories.length, indexChooseCategory]);


  const scrollByAmount = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className= {`category-bar-wrapper ${isExpand ? ("notExpand") : ("isExpand")}`}>
      {showLeft && (
        <button className="scroll-btn left" onClick={() => scrollByAmount(-200)}>
            <img src="/assets/images/3_leftarrow.png"/>
        </button>
      )}
      <div className="category-bar" ref={scrollRef}>
        {categories.map((cat, idx) => (
            <button key={idx} className={indexChooseCategory === idx ? ("category-native") : ("category")} onClick={() => setIndexChooseCategory(idx)}>{cat}</button>
        ))}
      </div>
      
      {showRight && (
        <button className="scroll-btn right" onClick={() => scrollByAmount(200)}>
            <img src="/assets/images/3_rightarrow.png"/>
        </button>
      )}
    </div>
  );
}

export default CategoryBar;
