import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DetailsText from '../../components/DetailsText';
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
        <DetailsText item={item} />
        <Link to="/" className={style.back}>
          <i className={`bi bi-caret-left ${style.icon}`} />
        </Link>
      </div>
    </div>
  );
};

export default Details;
