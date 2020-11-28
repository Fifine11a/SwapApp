import React from 'react';
import { useParams } from 'react-router-dom';
import ItemPreview from '../../itemPreview/itemPreview';
import './styles.css';

const category1 = {
  title: 'Detail kategorie',
  itemIds: [1, 2, 3],
};

const category2 = {
  title: 'Detail kategorie2',
  itemIds: [1, 2, 3],
};

const CategoryDetail = (props) => {
  let { id } = useParams();
  const categoryId = parseInt(id);
  const category = categoryId === 1 ? category1 : category2;

  return (
    <div className="CategoryDetail mediaQueries">
      <div className="header">
        <h1>{category.title}</h1>
      </div>
      <div className="breadcrumbsBtn">
        <button>Drobek</button>
        <button>Drobek</button>
        <button>Drobek</button>
      </div>
      <div className="categoryDetailElm">
        {category.itemIds.map((id) => (
          <ItemPreview key={id} id={id} />
        ))}
        {/* <div className="detailItem">
          <img
            className="itemImg"
            src="img/logo.png"
            alt="fotografie předmětu"
          />
          <span className="itemTitle">Titulek položky</span>
          <span className="userNameOffer">
            Jméno nabízejícího s odkazem na mail
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryDetail;
