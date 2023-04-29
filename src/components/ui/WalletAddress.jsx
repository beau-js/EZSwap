/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-28 22:56:51
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-29 03:21:00
 * @FilePath: \workspace\ez-swap\src\components\ui\WalletAddress.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useSelector } from 'react-redux';
import styles from './WalletAddress.module.scss';

function WalletAddress({ className }) {
  const inputWalletAddress = useSelector(
    (state) => state.inputWalletSlice.inputWallet
  );

  return (
    <div className={`${styles.walletAddress} ${className || null}`}>
      {inputWalletAddress}
    </div>
  );
}

export default WalletAddress;
