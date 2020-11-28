import React, { useState } from 'react';
import categories from '../../data/category.json';
import towns from '../../data/towns.json';
import db from '../../firestore.js';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './styles.css';

const NewForm = (props) => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [cityId, setCityId] = useState('');
  const [swapDescription, setSwapDescription] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categoryId, setCategoryId] = useState('');
  console.log({ categoryId });
  const submitForm = (event) => {
    event.preventDefault();
    const id = uuid();
    db.collection('items')
      .doc(id)
      .set({
        userName,
        email,
        cityId,
        swapDescription,
        description,
        title,
      })
      .then(() => {
        history.push(`/produkt/${id}`);
      });
  };
  return (
    <>
      <div className="offerPage mediaQueries">
        {' '}
        <div className="header">
          <h1>Nabízím</h1>
        </div>
        <div className="formStyle">
          <div className="formNote">
            Pro nahrání předmětu vyplňte tento formulář
          </div>
          <form onSubmit={submitForm}>
            <div className="section">
              <span>1</span>Jméno a kontakt
            </div>
            <div className="inner-wrap">
              <label>
                jméno a příjmení{' '}
                <input
                  value={userName}
                  type="text"
                  name="field1"
                  onChange={(event) => setUserName(event.target.value)}
                />
              </label>
              <label>
                e-mail{' '}
                <input
                  value={email}
                  type="email"
                  name="field2"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
            </div>

            <div className="section">
              <span>2</span>Nový předmět
            </div>
            <div className="inner-wrap innerWrapCategory">
              <label>
                Název předmětu{' '}
                <input
                  value={title}
                  type="text"
                  name="field3"
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <label>
                <div>Kategorie předmětu</div>
                <div>
                  {categories.map((category) => (
                    <React.Fragment key={category.id}>
                      <input
                        type="radio"
                        id={category.id}
                        name="field4"
                        value={category.id}
                        onChange={(event) => setCategoryId(event.target.value)}
                      />
                      <label htmlFor={category.id}>{category.name}</label>
                    </React.Fragment>
                  ))}
                </div>
              </label>
              <label>
                Popis předmětu{' '}
                <textarea
                  value={description}
                  name="field2"
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </label>
              <label>
                Za co chci vyměnit{' '}
                <textarea
                  value={swapDescription}
                  name="field2"
                  onChange={(event) => setSwapDescription(event.target.value)}
                ></textarea>
              </label>
              <div>
                <select
                  value={cityId}
                  onChange={(event) => setCityId(event.target.value)}
                >
                  {towns.map((town) => (
                    <option key={town.id} value={town.id}>
                      {town.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="section">
              <span>3</span>Nahrání fotografie
            </div>
            <div className="inner-wrap">
              <input
                className="photoElm"
                name="file-upload-field"
                type="file"
                className="file-upload-field"
              />
            </div>
            <div className="button-section">
              <input type="submit" name="Sign Up" />
              <span className="privacy-policy">
                <input type="checkbox" name="field7" />
                Souhlas s podmínkami a pravidly webu
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewForm;
