/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 18:25:55
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 18:47:41
 * @FilePath: \workspace\ez-swap\src\components\MyPools\PoolsItem.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Card from '../ui/Card';
import styles from './PoosItem.module.scss';

function PoolsItem({ value }) {
  let collectionType;

  if (value.title === 'Trading Pools') {
    collectionType = 'NFT Collection - ETH';
  }

  if (value.title === 'Buy Pools') {
    collectionType = 'ETH → NFT Collection';
  }

  if (value.title === 'Sell Pools') {
    collectionType = 'NFT Collection → ETH';
  }

  let balance;

  try {
    if (!value.balance.token) {
      balance = `${value.balance.nft}NFTs`;
    } else if (!value.balance.nft) {
      balance = `${value.balance.token}ETH`;
    } else {
      balance = `${value.balance.token}ETH`` ${value.balance.nft}NFTs`;
    }
  } catch (error) {
    // console.log(error);
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.title}>{value.title}</div>
        <div className={styles.description}>{value.description}</div>
      </header>

      <Card className={styles.outCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderLeft}>
            <input type="text" />
            <div className={styles.collectionType}>{collectionType}</div>
          </div>

          <div className={styles.balance}>Balance : {balance}</div>
        </div>

        <Card className={styles.insideCard}>
          <div>
            <h6>Current Price</h6>
            <p>{`${value.currentPrice.toFixed(3)} ETH`}</p>
          </div>

          <div>
            <h6>Bonding Curve</h6>
            <p className={styles.bondingCurve}>
              {value.bondingCurve && 'Linear'}
            </p>
          </div>

          <div>
            <h6>Delta</h6>
            <p>{`${value.delta.toFixed(3)} ETH`}</p>
          </div>

          <div>
            <h6>Volume</h6>
            <p>{`${value.volume.toFixed(3)} ETH`}</p>
          </div>
        </Card>
      </Card>
    </div>
  );
}

export default PoolsItem;
