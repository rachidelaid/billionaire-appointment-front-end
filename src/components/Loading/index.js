import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './style.module.css';

const Loading = () => {
  const [show, setShow] = useState(true);
  const { loading: userLoading } = useSelector((state) => state.users);
  const { loading } = useSelector((state) => state.billionaires);

  const toggleLoading = () => {
    if (userLoading || loading) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 1000);
    }
  };

  useEffect(() => {
    toggleLoading();
  }, [userLoading, loading]);

  return (
    <>
      {show && (
        <div className={style.loading}>
          <div className={style.spinner} />
        </div>
      )}
    </>
  );
};

export default Loading;
