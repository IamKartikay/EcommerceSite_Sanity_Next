import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineStar, AiFillStar } from 'react-icons/ai'

import { client , urlFor } from '../../lib/client'
import Product from '../../components/Product'
import {useStateContext} from '../../context/StateContext';

const ProductDetails = ({product, products}) => {

  const {image, name, details, price} = product;

  const [imgNumber, setImgNumber] = useState(0);
  const { decQty, qty, incQty, onAdd2Cart, setShowCart } = useStateContext();

  const handleBuyNow = () =>{
    onAdd2Cart(product, qty);
    setShowCart(true);
  }

  return (
    <div>
      <div className='product-detail-container' >
        <div> 
          <div className='image-container'>
            <img src={urlFor(image && image[imgNumber])} className='product-detail-image'/>
          </div>
          <div className='small-images-container'>
            {
              image?.map((item, index)=>(
                <img 
                  key={index}
                  src={urlFor(item)} 
                  className={
                      index === imgNumber ? 'small-image selected-image' : 'small-image'
                    } 
                  onMouseEnter={()=>{setImgNumber(index)}}   
                />
              ))
            }
          </div>
        </div>

         <div className='product-detail-desc'>
            <h1>{name}</h1>
            
            <div className='reviews' >
              <div>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              </div>
              <p>(10)</p>
            </div>

            <h4>Details</h4>
            <p>{details}</p>
            <p className='price'>${price}</p>

            <div className='quantity' >
              <h3>Quantity:</h3>
              <p className='quantity-desc'>
                <span className='minus' onClick={decQty}>
                  <AiOutlineMinus/>
                </span>
                <span className='num'>
                  {qty}
                </span> 
                <span className='plus' onClick={incQty} >
                  <AiOutlinePlus/>
                </span>
              </p>
            </div>
            <div className='buttons' >
              <button type='button' onClick={()=>onAdd2Cart(product, qty)} className='add-to-cart' >Add to Cart</button>
              <button type='button' onClick={handleBuyNow} className='buy-now' >Buy Now</button>
            </div>
         </div> 
      </div>

      <div className='maylike-products-wrapper'>
          <h2>You may also like</h2>
          <div className='marquee' >
            <div className='maylike-products-container track' >
              {products.map((item) => (
                <Product key={item._id} product = {item} />
              ))}
            </div>
          </div>
      </div>


    </div>
  )
}














export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails