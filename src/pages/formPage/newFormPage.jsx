import React from 'react';

const NewForm = (props) => {
  return (
    <>
      <div class="offerPage mediaQueries">
        <div class="header">
          <h1>Nabízím</h1>
        </div>
        <div class="formStyle">
          <div class="formNote">
            Pro nahrání předmětu vyplňte tento formulář
          </div>
          <form>
            <div class="section">
              <span>1</span>Jméno a kontakt
            </div>
            <div class="inner-wrap">
              <label>
                jméno a příjmení <input type="text" name="field1" />
              </label>
              <label>
                e-mail <input type="email" name="field2" />
              </label>
            </div>

            <div class="section">
              <span>2</span>Nový předmět
            </div>
            <div class="inner-wrap innerWrapCategory">
              <label>
                Název předmětu <input type="text" name="field3" />
              </label>
              <label>
                <div>Kategorie předmětu</div>
                <div>
                  <input type="radio" name="field4" value="Oblečení" />
                  Oblečení
                  <input type="radio" name="field4" value="Vše pro děti" />
                  Vše pro děti
                  <input type="radio" name="field4" value="Vše pro domácnost" />
                  Vše pro domácnost
                  <input type="radio" name="field4" value="Květiny" />
                  Květiny
                  <input type="radio" name="field4" value="Knihy" />
                  Knihy
                  <input type="radio" name="field4" value="Ostatní" checked />
                  Ostatní
                </div>
              </label>
              <label>
                Popis předmětu <textarea name="field2"></textarea>
              </label>
              <label>
                Za co chci vyměnit <textarea name="field2"></textarea>
              </label>
              <select name="city">
                <option value="brno">Brno</option>
                <option value="ceskeBudejovice">České Budějovice</option>
                <option value="hradecKralove">Hradec Králové</option>
                <option value="liberec">Liberec</option>
                <option value="olomouc">Olomouc</option>
                <option value="ostrava">Ostrava</option>
                <option value="pardubice">Pardubice</option>
                <option value="plzen">Plzeň</option>
                <option value="praha" selected>
                  Praha
                </option>
                <option value="zlin">Zlín</option>
              </select>
            </div>

            <div class="section">
              <span>3</span>Nahrání fotografie
            </div>
            <div class="inner-wrap">
              <input
                class="photoElm"
                name="file-upload-field"
                type="file"
                class="file-upload-field"
                value=""
              />
            </div>
            <div class="button-section">
              <input type="submit" name="Sign Up" />
              <span class="privacy-policy">
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
