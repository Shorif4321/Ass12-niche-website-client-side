import React from 'react';
import product from '../../images/product.jpg'

const FeturedProduct = () => {
    return (
  <div className="p-5 bg-secondary ">
            <div className="card mb-3">
  <div className="row g-0 d-flex align-items-center">
    <div className="col-md-6">
      <img src={product} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-6 p-3 ">
      <div className="card-body">
        <h5 className="card-title text-start">ECO – EARTH HANDMADE SISAL CROSSBODY BAG</h5>
        <h6 className="card-title text-start">Price : $125.00</h6>
                <p className="card-text text-start">Inspired by the colors of the earth and life, this bag tells a story and is handwoven by artisans in Kenya. This sturdy yet roomy crossbody bag, made from native African sisal plant fibers and leather, can act as a great everyday laptop carrier or weekend activity bag. It has a rich, textural, rustic feel that is elegant and comfortable.</p>
                
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default FeturedProduct;