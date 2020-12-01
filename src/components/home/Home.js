import React from 'react';
import Product from '../../components/product/Product.js';

import './Home.css';

function Home() {
      return (
            <div className = "home">
                  <div className = "home__container">
                        <img
                              className = "home__image"
                              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                              // src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
                        />

                        <div className="home__row">
                              <Product />
                              <Product />
                        </div>

                        <div className="home__row">
                              <Product />
                              <Product />
                              <Product />
                        </div>

                        <div className="home__row">
                              <Product />
                        </div>
                  </div>
            </div>
      )
}

export default Home;
