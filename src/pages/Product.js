import AppHeader from "../components/header"
import AppFooter from "../components/footer"
import ProductDetail from "../components/productDetail";
import products from "../json/product.json";

function Product({ match }) {
   const product = products.find(
      (x) => x.id === match.params.productId,
   );
   console.log(product)
   return (
      <div>
         <AppHeader />
         <ProductDetail product={product} />
         <AppFooter />
      </div>
   );
}

export default Product;
