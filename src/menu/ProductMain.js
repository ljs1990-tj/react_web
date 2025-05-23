import { useState } from "react";
import Product from "../component/Product";

function ProductMain(){
    let [isFlg, setFlg] = useState(true);
    return (
        <div>
            <button onClick={()=>{
                setFlg(!isFlg);
            }}>{isFlg ? "가리기" : "보이기"}</button>
            {isFlg ? <Product></Product> : null}
        </div>
    )
}

export default ProductMain