import React from 'react';

import { SubHeading } from '../../components';
import Img from '../../components/Img/Img';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Are you ready for an unforgettable dining experience that tantalizes
        your taste buds and ignites your senses? Look no further! Gericht
        is your passport to a world of exquisite flavors and unforgettable moments.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <Img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
