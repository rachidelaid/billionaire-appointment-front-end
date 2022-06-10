import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import Billionare from '../../components/Billionare';
import {
  back, next,
} from '../../redux/billionaires';

const Home = () => {
  const dispatch = useDispatch();
  const { limit: data, offset, total } = useSelector((state) => state.billionaires);
  const nextClick = () => {
    dispatch(next());
  };
  const backClick = () => {
    dispatch(back());
  };

  return (
    <div className={style.container}>
      {!data.length ? (<p>There are no billionaires!</p>) : (
        <>
          <div>
            <h1 className={style.title}>TOP BILLIONAIRES</h1>
            <h2 className={style.subtitle}>Please select a billionaire</h2>
          </div>
          <div className={style.list}>
            {
              data.map((item) => <Billionare item={item} key={item.id} />)
            }
          </div>
          {
            (offset >= total - 1) ? ''
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
        </>
      )}
    </div>
  );
};

export default Home;
