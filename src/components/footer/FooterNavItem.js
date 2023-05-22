import styles from "../../styles/components/footer/Footer.module.css";

const FooterNavItem = (props) => {
  return (
    <>
      <li className={styles.footerNavItem}>
        <h3>{props.name}</h3>
        <ul>{props.children}</ul>
      </li>
    </>
  );
};

export default FooterNavItem;
