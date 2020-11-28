import React from 'react';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import items from '../../data/items.json';
import { useParams } from 'react-router-dom';

const ItemDetail = (props) => {
  let { id } = useParams();
  const productId = parseInt(id);
  const product = items.find((item) => item.id === productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div class="itemPage mediaQueries">
        <div className="header">
          <h1>Detail produktu</h1>
        </div>
        <Breadcrumbs />
        <div class="itemOfferDetails">
          <img class="itemImg" src="../../itemImg/kniha5.jpg" />
          <span class="itemTitle">{product.title}</span>
          <span class="itemLocation">{product.city}</span>
          <span class="itemText">{product.text}</span>
          <span className="exchangeDemand">{product.exchange}</span>
          <span class="userNameOffer">
            {product.name}", kontakt:"{product.contact}
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
