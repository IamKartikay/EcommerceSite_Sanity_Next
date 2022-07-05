import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Navbar } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
  {console.log(bannerData)}
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>Get the best products in the market!</p>
    </div>

    <div className="products-container">
      {products?.map((item) => <Product key={item._id} product={item} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[1]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;