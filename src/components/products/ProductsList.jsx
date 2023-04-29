import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductItem from './ProductItem';
import classes from './ProductsList.module.scss';
import { setPoolsData } from '@/store/features/poolsDataSlice';

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 02:05:29
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-29 03:57:04
 * @FilePath: \workspace\ez-swap\src\components\products\ProductsList.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

function ProductsList() {
  const nftData = useSelector((state) => state.nftDataSlice.nftData);
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
  }, [dispatch]);

  return (
    <>
      <header className={classes.header}>Trending</header>
      <main className={classes.main}>
        {Object.values(nftData).map((value) => (
          <ProductItem value={value} key={value.title} />
        ))}
      </main>
    </>
  );
}

export default ProductsList;
