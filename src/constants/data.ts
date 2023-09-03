import images from './images';

export interface IWine {
  title: string;
  price: string;
  tags: string;
}

const wines: IWine[] = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

export interface ICocktail {
  title: string;
  price: string;
  tags: string;
}
const cocktails: ICocktail[] = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

export interface IAward {
  imgUrl: string;
  title: string;
  subtitle: string;
}
const awards: IAward[] = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Serving fantastic meals at affordable prices',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Cheers to unforgettable moments!',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Our dedicated staff is committed to providing you with impeccable service',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: "Indulge in our chef's special creations",
  },
];

const data = { wines, cocktails, awards };
export default data;
