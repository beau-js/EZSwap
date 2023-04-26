import ProductItem from './ProductItem';
import classes from './ProductsList.module.scss';

/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 02:05:29
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-27 06:18:56
 * @FilePath: \workspace\ez-swap\src\components\products\ProductsList.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
function ProductsList({ nftData }) {
  return (
    <>
      <header className={classes.header}>Trending</header>
      <main>
        {Object.values(nftData).map((value) => (
          <ProductItem value={value} key={value.title}></ProductItem>
        ))}
      </main>
    </>
  );
}

export default ProductsList;
