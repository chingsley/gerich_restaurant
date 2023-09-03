import React from 'react';
import Img from '../../components/Img/Img';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <Img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <Img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Whether you're a seafood lover, a steak connoisseur, or a vegetarian at heart, our diverse menu offers a wide range of options to suit every palate.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <Img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <Img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our talented chefs craft each dish with passion and precision, using the finest ingredients to create culinary masterpieces that will leave you craving for more.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
