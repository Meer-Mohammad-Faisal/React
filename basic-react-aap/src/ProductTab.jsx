import Product from "./Product.jsx";

function ProductTab () {
    let styles = {
        display : "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItem: "center",
        //backgroundColor: "green"
    };
    
    return (
        <div style={styles} >
           
        <Product title="Logitech MX Master" idx={0}/>
        <Product title ="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-transformer" idx={2}/>
        <Product title="petronics keyboard" idx={3}/>
        </div>
    );    
}

export default ProductTab;