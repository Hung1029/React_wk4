//import {Row,Col} from 'antd';

export default function ProductDetail({ product }) {
   return (
      <div className="row detail">
      <div className="text col-md-3 col-sm-7">
         <h3 className="text">
            {product.title}  {product.text1}{product.text2}
         </h3>
         <img
            alt={product.id}
            className="imgdetail"
            src={`.` + product.picture}
         />
         <div className="text">
            <p className="">
               {product.content}
            </p>
         </div>
      </div>
      </div>
   );
}
