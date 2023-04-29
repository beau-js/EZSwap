/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-26 23:24:14
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-29 00:50:46
 * @FilePath: \workspace\ez-swap\src\components\Layout\MainHeader.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from './MainHeader.module.scss';

function MainHeader() {
  const router = useRouter();

  let inputIsVisible = true;

  if (router.pathname === '/') {
    inputIsVisible = false;
  } else {
    inputIsVisible = true;
  }

  const clickMyPoolsHandler = () => {
    router.push('/my-pools');
  };

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo} />
      </Link>

      <div className={classes.container}>
        {inputIsVisible && <input type="text" />}

        <button
          type="submit"
          onClick={clickMyPoolsHandler}
          className={classes.myPoolsButton}
        >
          My Pools
        </button>

        <button
          type="submit"
          className={`${classes.connectButton} ${
            inputIsVisible ? classes.switch : null
          }`}
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
