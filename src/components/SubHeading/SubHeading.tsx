import React from 'react';

import { images } from '../../constants';
import Img from '../Img/Img';

interface SubHeadingProps {
  title: string;
}
const SubHeading: React.FC<SubHeadingProps> = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <Img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
