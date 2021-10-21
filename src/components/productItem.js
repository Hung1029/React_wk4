
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  return (
    <div className="col-md-3">

      <div className="product-info">
        <figure className="snip1190">
          <img src={product.picture} alt="sample62" />
          <Link to={`/product/${product.id}`} className="linkfigure">
            <figcaption>
              <div className="square">
                <div></div>
              </div>
              <h2>{product.text1}<span>{product.text2}</span></h2>
              <p>{product.content}</p>
            </figcaption>
          </Link>

        </figure>

      </div>

    </div>
  );
}
