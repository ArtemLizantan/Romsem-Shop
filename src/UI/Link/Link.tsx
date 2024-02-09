import styles from "./link.module.scss";

interface ILink {
  text: string;
}

const Link = ({ text }: ILink) => {
  return (
    <a href="#" className={styles.link}>
      {text}
    </a>
  );
};

export default Link;
