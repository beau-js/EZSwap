/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 16:19:12
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 19:38:59
 * @FilePath: \workspace\ez-swap\src\components\MyPools\MyPoolsList.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { useSelector } from 'react-redux';
import PoolsItem from './PoolsItem';
import styles from './MyPoolsList.module.scss'; // fix this

function MyPoolsList() {
  const poolsData = useSelector((state) => state.poolsDataSlice.poolsData);

  let obj = { ...poolsData };
  const { tradingPools } = obj;
  delete obj.tradingPools;
  obj = { tradingPools, ...obj };

  return (
    <div className={styles.main}>
      {Object.values(obj).map(
        (value) => value && <PoolsItem value={value} key={value.title} />
      )}
    </div>
  );
}

export default MyPoolsList;
