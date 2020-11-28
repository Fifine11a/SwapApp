import React from 'react';

const itemPreview1 = {
  img: 'tady je obrázek',
  title: 'tady je název',
  user: 'tady je jméno',
};

const itemPreview2 = {
  img: 'tady je obrázek2',
  title: 'tady je název2',
  user: 'tady je jméno2',
};

const ItemPreview = (props) => {
  const itemPreviewId = props.id;
  const itemPreview = itemPreviewId === 1 ? itemPreview1 : itemPreview2;

  return (
    <div className="detailItem">
      <span>{itemPreview.img}</span>
      <span>{itemPreview.title}</span>
      <span>{itemPreview.user}</span>
    </div>
  );
};

export default ItemPreview;
