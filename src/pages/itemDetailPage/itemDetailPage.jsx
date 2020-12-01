import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import db from '../../firestore.js';
import { useParams } from 'react-router-dom';
import towns from '../../data/towns.json';
import './itemDetailPage.css';
import CategoryDetail from '../categoryDetailPage/categoryDetailPage';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    db.collection('items')
      .doc(id)
      .get()
      .then((result) => result.data())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return null;
  }

  const city = towns.find((city) => city.id === parseInt(product.cityId));

  return (
    <>
      <div className="itemPage mediaQueries">
        <div>
          <h1>{product.title}</h1>
        </div>
        {/* <Breadcrumbs /> */}
        <div className="itemOfferDetails">
          <img className="itemImg" src={product.imageUrl} />
          <div className="itemSubscription">
            <div className="locationElm">
              <span className="label">Lokalita:</span>
              <span className="itemLocation">{city?.name}</span>
            </div>
            <div className="itemTextElm">
              <span className="label">Co se nabízí:</span>
              <span className="itemText">{product.description}</span>
            </div>
            <div className="itemTextElm">
              <span className="label">Za co se nabízí:</span>
              <span className="exchangeDemand">{product.swapDescription}</span>
            </div>
            <div className="userNameElm">
              <span className="label">Kdo nabízí:</span>
              <span className="userName">{product.userName}</span>
            </div>

            <div className="mailBtnElm">
              <a href={`mailto:${product.email}`}>
                <button className="mailBtn">Chci swapnout</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
