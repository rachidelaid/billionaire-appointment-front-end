import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import Billionare from '../../components/Billionare';
import { fetchBillionaires } from '../../redux/billionaires';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBillionaires());
  }, []);
  const data = useSelector((state) => state.billionaires.all);

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>TOP SPEAKERS</h1>
        <h2 className={style.subtitle}>Please select a speaker</h2>
      </div>
      <div className={style.list}>
        {
        data.map((item) => <Billionare item={item} key={item.name} />)
      }
      </div>
      <button type="button" className={style.next}>
        <i className={`bi bi-caret-right ${style.icon}`} />
      </button>
    </div>
  );
};

export default Home;
