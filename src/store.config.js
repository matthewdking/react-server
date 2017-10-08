import { createStore } from 'redux';
import reducers from './reducers/index';

import KingImg from '../public/assets/king.jpg';
import VeredImg from '../public/assets/vered.jpg';
import PaulImg from '../public/assets/paul.jpg';
import SajedaImg from '../public/assets/sajeda.jpg';
import AmyImg from '../public/assets/amy.jpg';
import HeatherImg from '../public/assets/heather.jpg';
import LeoImg from '../public/assets/leo.jpg';
import KatiaImg from '../public/assets/katia.jpg';

const storeConfigure = () => {
  const initialStore = { FACN2: [
    { name: 'King', id: 1, country: 'UK', img: KingImg },
    { name: 'Vered', id: 2, country: 'Israel', img: VeredImg },
    { name: 'Paul', id: 3, country: 'Israel', img: PaulImg },
    { name: 'Sajeda', id: 4, country: 'Israel', img: SajedaImg },
    { name: 'Katia', id: 5, country: 'Israel', img: KatiaImg },
    { name: 'Amy', id: 6, country: 'USA', img: AmyImg },
    { name: 'Leo', id: 7, country: 'Hong Kong', img: LeoImg },
    { name: 'Heather', id: 0, country: 'Korea', img: HeatherImg }
  ] };

  const store = createStore(reducers, initialStore);

  return store;
};

export default storeConfigure;
