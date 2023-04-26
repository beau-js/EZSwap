import styles from './Card.module.scss';
function Card({ children, className }) {
  return (
    <div className={`${styles.card} ${className ? className : ''}`}>
      {children}
    </div>
  );
}

export default Card;
