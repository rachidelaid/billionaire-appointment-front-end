import React from 'react';
import style from './style.module.css';

const Loading = () => (
  <div className={style.loading}>
    <div className={style.spinner} />
  </div>
);

export default Loading;
