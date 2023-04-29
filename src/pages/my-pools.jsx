/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 15:58:25
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-29 03:06:29
 * @FilePath: \workspace\ez-swap\src\pages\my-pools.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// our-domain.com/MyPool
import styles from '../styles/MyPool.module.scss';
import MyPoolsList from '@/components/MyPools/MyPoolsList';
import WalletAddress from '@/components/ui/WalletAddress';
import Button from '@/components/ui/Button';

function MyPool() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>My Pools</div>

        <WalletAddress className={styles.wallet} />
        <Button>+ Create New Pool</Button>
      </header>
      <MyPoolsList />
    </>
  );
}

export default MyPool;
