import React from 'react';
import style from './style.module.css';
import Billionare from '../../components/Billionare';
import mockData from '../../mockdata';

const Home = () => (
  <div className={style.container}>
    <div>
      <h1 className={style.title}>TOP SPEAKERS</h1>
      <h2 className={style.subtitle}>Please select a speaker</h2>
    </div>
    <div className={style.list}>
      {
        mockData.map((item) => <Billionare item={item} key={item.id} />)
      }
    </div>
    <button type="button" className={style.next}>
      <i className={`bi bi-caret-right ${style.icon}`} />
    </button>
  </div>
);

export default Home;
