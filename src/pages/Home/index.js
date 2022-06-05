import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import Billionare from '../../components/Billionare';
import { back, fetchBillionaires, next } from '../../redux/billionaires';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBillionaires());
  }, []);

  const data = useSelector((state) => state.billionaires.current);
  const offset = useSelector((state) => state.billionaires.offset);
  const total = useSelector((state) => state.billionaires.total);
  const nextClick = () => {
    dispatch(next());
  };
  const backClick = () => {
    dispatch(back());
  };

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>TOP BILLIONAIRES</h1>
        <h2 className={style.subtitle}>Please select a billionaire</h2>
      </div>
      <div className={style.list}>
        {
        data.map((item) => <Billionare item={item} key={item.name} />)
      }
      </div>
      {
        (offset >= total) ? ''
          : (
            <button type="button" className={style.next} onClick={nextClick}>
              <i className={`bi bi-caret-right ${style.icon}`} />
            </button>
          )
      }
      {

      (offset <= 0) ? ''
        : (
          <button type="button" className={style.back} onClick={backClick}>
            <i className={`bi bi-caret-left ${style['back-icon']}`} />
          </button>
        )

      }
    </div>
  );
};

export default Home;
