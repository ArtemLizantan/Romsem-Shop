interface IBtn {
  text: string;
}
import styles from "./btn.module.scss";

const Button = ({ text }: IBtn) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Button;
