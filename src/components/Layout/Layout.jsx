/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-26 23:29:45
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 18:14:59
 * @FilePath: \workspace\ez-swap\src\components\Layout\Layout.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import MainHeader from './MainHeader';

function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
