import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCurrentBillionaire } from '../../redux/billionaires';
import style from './style.module.css';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentBillionaire(id));
  }, []);
  const item = useSelector((state) => state.billionaires.current);

  return (
    <div className={style.page}>
      <div className={style.container}>

        <section className={style['image-section']}>
          <img src={item.image} alt={item.id} className={style.image} />
        </section>
        <section className={style.details}>
          <header>
            <h2 className={style.name}>{item.name}</h2>
            <h3 className={style.title}>{item.title}</h3>
          </header>
          <div className={style.tile}>
            <span>price</span>
            <span>{item.price}</span>
          </div>
          <div className={style.bio}>
            <h3>Bio</h3>
            <p>{item.description}</p>
          </div>
          <div className={style['reserve-div']}>
            <Link to="http://localhost:3000" className={style.reserve}>
              <span>Reserve</span>
              <span><i className="bi bi-emoji-smile-fill" /></span>
            </Link>
          </div>
        </section>
        <Link to="/" className={style.back}>
          <i className={`bi bi-caret-left ${style.icon}`} />
        </Link>
      </div>
    </div>
  );
};

export default Details;
