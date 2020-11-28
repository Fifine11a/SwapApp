import React from 'react';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import items from '../../data/items.json';
import { useParams } from 'react-router-dom';
import image from '../../itemImg/jarda.jpg';

const ItemDetail = (props) => {
  let { id } = useParams();
  const productId = parseInt(id);
  const product = items.find((item) => item.id === productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div className="itemPage mediaQueries">
        <div className="header">
          <h1>Detail produktu</h1>
        </div>
        <Breadcrumbs />
        <div className="itemOfferDetails">
          <img className="itemImg" src={image} />
          <span className="itemTitle">{product.title}</span>
          <span className="itemLocation">Lokalita: {product.city}</span>
          <span className="itemText">{product.text}</span>
          <span className="exchangeDemand">
            Co chci výměnou: {product.exchange}
          </span>
          <span className="userNameOffer">
            {product.name}", kontakt:"{product.contact}
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
