/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-26 23:24:14
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-27 01:55:34
 * @FilePath: \workspace\ez-swap\src\components\Layout\MainHeader.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import classes from './MainHeader.module.scss';

function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <span>
          {/* <img src="/image/ezSwapLogo.png" alt="ezSwapLogo" /> */}
        </span>
        <button>My Pools</button>
        <button>Connect Wallet</button>
      </header>
    </>
  );
}

export default MainHeader;
