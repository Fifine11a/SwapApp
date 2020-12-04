import React, { useEffect, useState } from 'react';
import towns from '../../data/towns.json';
import db, { storage } from '../../firestore.js';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { v4 as uuid } from 'uuid';
import './styles.css';
import { Link } from 'react-router-dom';

const NewForm = (props) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    db.collection('categories')
      .get()
      .then((result) =>
        result.docs.map((e) => {
          const data = e.data();
          return {
            ...data,
            id: e.id,
          };
        }),
      )
      .then((data) => setCategories(data));
  }, []);

  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [cityId, setCityId] = useState('');
  const [swapDescription, setSwapDescription] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [imageAsFile, setImageAsFile] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();
    const id = uuid();
    const uploadedImageUrl = await handleFireBaseUpload();

    await db.collection('items').doc(id).set({
      userName,
      email,
      cityId,
      swapDescription,
      description,
      title,
      imageUrl: uploadedImageUrl,
    });

    await db
      .collection('categories')
      .doc(categoryId)
      .update({
        items: firebase.firestore.FieldValue.arrayUnion(db.doc(`items/${id}`)),
      });

    history.push(`/produkt/${id}`);
  };

  const handleFireBaseUpload = () =>
    new Promise((resolve, reject) => {
      console.log('start of upload');
      // async magic goes here...
      if (imageAsFile === '') {
        return console.error(
          `not an image, the image file is a ${typeof imageAsFile}`,
        );
      }
      const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      //initiates the firebase side uploading
      uploadTask.on(
        'state_changed',
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot);
        },
        (err) => {
          //catches the errors
          reject(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          storage
            .ref('images')
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              resolve(fireBaseUrl);
            });
        },
      );
    });

  const handleSelectImage = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  if (!categories) {
    return null;
  }

  return (
    <div className="offerPage mediaQueries">
      {' '}
      <div>
        <h1>Nabízím</h1>
      </div>
      <div className="formStyle">
        <div className="formNote">
          Pro nahrání předmětu vyplňte tento formulář
        </div>
        <form onSubmit={submitForm}>
          <div className="section">
            <span>1</span>Nový předmět
          </div>
          <div className="inner-wrap innerWrapCategory">
            <label>
              Název předmětu *{' '}
              <input
                required
                value={title}
                type="text"
                name="field3"
                maxLength="30"
                placeholder="Sem patří stručný a výstižný titulek :)"
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label>
              <div>Kategorie předmětu *</div>
              <div className="radio">
                {categories.map((category) => (
                  <React.Fragment key={category.id}>
                    <input
                      required
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
              Popis předmětu *{' '}
              <textarea
                required
                value={description}
                name="field2"
                maxLength="250"
                placeholder="Vyšší šanci na výměnu mají předměty, u kterých je uvedený stav a stáří. Poptávka není jen po nepoužitých předmětech, zářících novotou. Věříme, že každé zboží má svého... měniče :)"
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </label>
            <label>
              Za co chci vyměnit *{' '}
              <textarea
                required
                value={swapDescription}
                name="field2"
                maxLength="250"
                placeholder="Napiš, co by se ti hodilo výměnou. Ideálně dej prosím na výběr z více věcí. Může se také stát, že tě uživatelé překvapí a výměnou ti nabídnou něco úplně nečekaného :)"
                onChange={(event) => setSwapDescription(event.target.value)}
              ></textarea>
            </label>
            <div>
              Lokalita, kde se uskuteční výměna *
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
            <span>2</span>Nahrání fotografie
          </div>
          <div className="inner-wrap">
            <input
              required
              className="photoElm"
              name="file-upload-field"
              type="file"
              className="file-upload-field"
              onChange={handleSelectImage}
            />
          </div>

          <div className="section">
            <span>3</span>Jméno a kontakt
          </div>
          <div className="inner-wrap">
            <label>
              jméno *{' '}
              <input
                required
                value={userName}
                type="text"
                name="field1"
                maxLength="30"
                onChange={(event) => setUserName(event.target.value)}
              />
            </label>
            <label>
              e-mail *{' '}
              <input
                required
                value={email}
                type="email"
                name="field2"
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>

          <div className="btnSection">
            <input type="submit" name="Sign Up" />
            <span className="privacy-policy">
              <input required type="checkbox" name="field7" />
              <Link to="/faq">Souhlas s podmínkami a pravidly</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
