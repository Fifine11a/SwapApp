import React from 'react';
import './aboutPage.css';

const AboutUs = () => {
  return (
    <div className="aboutUsPage">
      <h1>SwapApp by Marie&Magdalena</h1>
      <p>
        Tahle aplikace je náš absolventský projekt v rámci podzimního běhu
        Digitální akademie:Web 2020.
      </p>
      <p>
        Děkujeme{' '}
        <a href="https://www.czechitas.cz/cs/">
          <img src="../../img/Czechitas.png" alt="logo Czechitas" />
        </a>{' '}
        za organizaci, Martinovi, Filipům, Sergejovi, Petrovi a spol za
        lektorování a koučování.
      </p>
      <p>
        Děkujeme Leně a Zuzce a všem ostatním holkám za skvělou atmosféru a
        vzájemnou podporu.
      </p>
      <p>
        Náš nekonečný vděk patří taky Lukášovi, Rosťovi a Tomášovi z Pipedrive
        za mentorování a láskyplnou péči. A fotbálkové bitvy. A víno.
      </p>
      <div className="mailBtnElm">
        <a href={`mailto: swapapp@zohomail.eu`}>
          <button className="mailBtn">Napište nám</button>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
