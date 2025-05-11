import "./Product.css";
import Price from "./Price";

function Product({ title, idx}) {
    let OldPrice = ["12,495", "11,900", "1,599", "599"];
    let NewPrice = ["8,999", "9,199", "899", "278"];
    let description = [["8,000 DPI","5 programmable buttons"], ["intuitive surface","design for iPad Pro "], ["designed for iPad pro", "intuitive surface"], ["wireless", "optical orientation"]];
        return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]}/>
        </div>
        );
}


export default Product;