/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 03:15:36
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 18:55:48
 * @FilePath: \workspace\ez-swap\src\components\ui\Button.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import classes from './Button.module.scss';

function Button({ children, onClick, type }) {
  return (
    <button
      type={type || 'submit'}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
