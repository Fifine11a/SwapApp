import db from '../firestore';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const ItemDeletedBtn = () => {
  const { id } = useParams();
  const [deleted, setdeleted] = useState(false);

  const deleteItem = (e) => {
    db.collection('items').doc(`${id}`).update({
      status: `deactivated`,
    });
    setdeleted(true);
  };

  return (
    <button onClick={deleteItem}>
      {deleted ? 'Předmět odstraněn' : 'Odstranit'}
    </button>
  );
};

export default ItemDeletedBtn;
