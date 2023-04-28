/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 15:58:25
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 02:55:12
 * @FilePath: \workspace\ez-swap\src\pages\my-pools.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// our-domain.com/MyPool
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@/components/ui/Button';
import styles from '../styles/MyPool.module.scss';
import MyPoolsList from '@/components/MyPools/MyPoolsList';
import { setPoolsData } from '@/store/features/poolsDataSlice';

function MyPool() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-b7ad1-default-rtdb.firebaseio.com/pools.json'
      );
      const data = await response.json();
      dispatch(setPoolsData(data));
    };
    fetchData();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>My Pools</div>
        <input />
        <Button>+Create New Pool</Button>
      </header>
      <MyPoolsList />
    </>
  );
}

export default MyPool;
