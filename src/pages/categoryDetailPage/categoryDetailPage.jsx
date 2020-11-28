import React from 'react';
import './styles.css';

const CategoryDetail = (props) => {
  return (
    <div className="CategoryDetail mediaQueries">
      <div className="header">
        <h1>Detail kategorie</h1>
      </div>
      <div className="breadcrumbsBtn">
        <button>Drobek</button>
        <button>Drobek</button>
        <button>Drobek</button>
      </div>
      <div className="categoryDetailElm">
        <div className="detailItem">
          <img
            className="itemImg"
            src="img/logo.png"
            alt="fotografie předmětu"
          />
          <span className="itemTitle">Titulek položky</span>
          <span className="userNameOffer">
            Jméno nabízejícího s odkazem na mail
          </span>
        </div>
        <div className="detailItem">
          <img
            className="itemImg"
            src="img/logo.png"
            alt="fotografie předmětu"
          />
          <span className="itemTitle">Titulek položky</span>
          <span className="userNameOffer">
            Jméno nabízejícího s odkazem na mail
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
