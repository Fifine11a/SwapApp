import db from '../firestore';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const ItemDeletedBtn = (props) => {
  const { id } = useParams();
  const [deleted, setdeleted] = useState(props.deleted);

  const deleteItem = (e) => {
    db.collection('items').doc(`${id}`).update({
      status: `deactivated`,
    });
    setdeleted(true);
    props.onDeleted(true);
  };

  return (
    <button onClick={deleteItem}>
      {deleted ? 'Předmět odstraněn' : 'Odstranit'}
    </button>
  );
};

export default ItemDeletedBtn;
