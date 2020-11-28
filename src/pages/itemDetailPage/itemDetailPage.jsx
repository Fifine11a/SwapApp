import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';

const ItemDetail = (props) => {
  return (
    <>
      <div class="itemPage mediaQueries">
        <Breadcrumbs />
        <div class="itemOfferDetails">
          <img class="itemImg" src="../pages/./item img/kniha4.jpg" />
          <span class="itemTitle">Titulek položky</span>
          <span class="itemText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            eius aut error quasi repudiandae temporibus, quaerat nemo cum
            molestiae, voluptate recusandae. Ea debitis facere exercitationem
            reiciendis quasi, ipsa ipsam doloribus?
          </span>
          <span class="userNameOffer">
            Jméno nabízejícího s odkazem na mail
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
