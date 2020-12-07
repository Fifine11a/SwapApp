import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import db from '../../firestore.js';
import { useParams } from 'react-router-dom';
import towns from '../../data/towns.json';
import './itemDetailPage.css';
import CategoryDetail from '../categoryDetailPage/categoryDetailPage';
import ItemsOverview from '../../itemOverview/itemOverview';
import firebase from 'firebase';
import ItemBookedBtn from '../../button/ItemBookedBtn';
import ItemDeletedBtn from '../../button/ItemDeletedBtn';
import leftBullet from '../../img/left_li_bullet.png';
import { Link } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    db.collection('items')
      .doc(id)
      .get()
      .then((result) => result.data())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return null;
  }

  if (product.status === 'deactivated') {
    return (
      <div className="deactivatedItem">
        <ItemsOverview
          title="Produkt byl stáhnutý z nabídky. Aktuálně můžeš swapnout například:"
          sort="title"
          max="6"
        />
      </div>
    );
  }

  const city = towns.find((city) => city.id === parseInt(product.cityId));

  const handleDeleted = (isDeleted) => {
    const productCopyDlt = { ...product };

    productCopyDlt.status = 'deactivated';

    setProduct(productCopyDlt);
  };

  const handleBooked = (isBooked) => {
    const productCopy = { ...product };

    productCopy.status = isBooked ? 'booked' : 'active';

    setProduct(productCopy);
  };

  return (
    <>
      <div className="itemPage">
        <Link className="backTo" to={`/kategorie`}>
          <img className="backToBullet" src={leftBullet} alt="zpět kategorie" />{' '}
          <span>kategorie</span>
        </Link>
        <>
          <h1>
            {`${product.status}` === 'booked'
              ? `${product.title} - rezervováno`
              : `${product.title}`}
          </h1>
        </>
        <div
          className={
            product.status === 'booked' ? 'bookedItem' : 'itemOfferDetails'
          }
        >
          <img className="itemImg" src={product.imageUrl} />
          <div className="itemSubscription">
            <div className="locationElm">
              <span className="label"></span>
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
              <span className="userName">{product.userName}</span>
            </div>
            <div className="itemStatusBtnElm">
              <ItemBookedBtn
                onBooked={handleBooked}
                booked={product.status === 'active'}
              />
              <ItemDeletedBtn
                onDeleted={handleDeleted}
                deleted={product.status === 'deactivated'}
              />
            </div>

            <div className="mailBtnElm">
              <a href={`mailto:${product.email}`}>
                <button className="mailBtn" title="Chci swapnout">
                  <span>chci swapnout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="itemsOverviewElm">
          <ItemsOverview title="V nabídce máme také:" sort="title" max="4" />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
