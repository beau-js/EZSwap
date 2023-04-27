/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-26 23:09:58
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-27 05:06:39
 * @FilePath: \workspace\ez-swap\src\pages\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// our-domain.com/

import ProductsList from '@/components/products/ProductsList';
import classes from '../styles/Home.module.scss';
import Button from '@/components/ui/Button';
import { useEffect, useState } from 'react';

function Home() {
  const [nftData, setNftData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://react-http-b7ad1-default-rtdb.firebaseio.com/nft.json'
      );
      const data = await response.json();
      setNftData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <main className={classes.main}>
        <div className={classes.title}>EZ-Swap</div>
        <div className={classes.description}>
          A community based NFT <br />
          decentralized exchange
        </div>
        <div className={classes.others}>
          Community Oriented
          <span>
            {'\u00A0'} {'\u00A0'} | {'\u00A0'} {'\u00A0'}
          </span>
          Decentralized
          <span>
            {'\u00A0'} {'\u00A0'} | {'\u00A0'} {'\u00A0'}
          </span>
          0.5% Fees
        </div>
        <Button>+ Create New Pool</Button>
        <input
          type="text"
          placeholder="Enter Collection Name or Contract Address"
        ></input>

        <ProductsList nftData={nftData}></ProductsList>
      </main>
    </>
  );
}
export default Home;
