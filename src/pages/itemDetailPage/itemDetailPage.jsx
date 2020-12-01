import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import db from '../../firestore.js';
import { useParams } from 'react-router-dom';
import towns from '../../data/towns.json';
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
        <div className="header">
          <h1>Detail produktu</h1>
        </div>
        <Breadcrumbs />
        <div className="itemOfferDetails">
          <img className="itemImg" src={product.imageUrl} />
          <span className="itemTitle">{product.title}</span>
          <span className="itemLocation">Lokalita: {city?.name}</span>
          <span className="itemText">{product.description}</span>
          <span className="exchangeDemand">
            Co chci výměnou: {product.swapDescription}
          </span>
          <span className="userNameOffer">
            {product.userName}", kontakt:"{product.email}
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
