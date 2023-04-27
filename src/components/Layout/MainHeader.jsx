/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-26 23:24:14
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 02:06:09
 * @FilePath: \workspace\ez-swap\src\components\Layout\MainHeader.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useRouter } from 'next/router';
import classes from './MainHeader.module.scss';

function MainHeader() {
  const router = useRouter();

  const clickMyPoolsHandler = () => {
    router.push('/my-pools');
  };

  return (
    <>
      <header className={classes.header}>
        <span>
          {/* <img src="/image/ezSwapLogo.png" alt="ezSwapLogo" /> */}
        </span>
        <button onClick={clickMyPoolsHandler}>My Pools</button>
        <button>Connect Wallet</button>
      </header>
    </>
  );
}

export default MainHeader;
