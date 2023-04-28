/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 04:21:57
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 18:56:32
 * @FilePath: \workspace\ez-swap\src\components\ui\Card.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styles from './Card.module.scss';

function Card({ children, className }) {
  return <div className={`${styles.card} ${className || ''}`}>{children}</div>;
}

export default Card;
