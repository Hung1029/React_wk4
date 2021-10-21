import products from "../json/product.json";
import ProductItem from "./productItem";
export default function ProductList() {
  return (
    products.map(product => (<div className="col-md-3 col-sm-7">        
          <ProductItem key={product.id} product={product}/>  
          </div>
      ))
  );
}
