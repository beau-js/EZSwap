/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-28 20:45:22
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-29 03:17:49
 * @FilePath: \workspace\ez-swap\src\pages\collection.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

// our-domain.com/collection
import MyPoolsList from '@/components/MyPools/MyPoolsList';
import styles from '../styles/collection.module.scss';
import WalletAddress from '@/components/ui/WalletAddress';
import Button from '@/components/ui/Button';

function collection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>[Collection Name]</h1>
        <nav>
          <ul>
            <li>
              <span>Floor Price</span>1 ETH
            </li>
            <li>
              <span>Best Offer</span>
              0.9 ETH
            </li>
            <li>
              <span>Offer TVL</span>
              10 ETH
            </li>
            <li>
              <span>Volume </span>
              100 ETH
            </li>
          </ul>
        </nav>

        <WalletAddress className={styles.wallet} />
        <Button>+ Create New Pool</Button>
      </header>

      <MyPoolsList />
    </div>
  );
}

export default collection;
