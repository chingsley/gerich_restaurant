import { SubHeading } from '../../components';
import Img from '../../components/Img/Img';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <Img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <Img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Ready to embark on a culinary journey like no other?</p>
        </div>
        <p className="p__opensans">
          Join us at Gericht and savor the extraordinary. Whether it's a romantic dinner,
          a family celebration, or a business meeting, we're here to make it truly special.
          🥂 Come hungry, leave happy. Your culinary adventure starts here!
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <Img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
