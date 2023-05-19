import styles from "../../styles/components/footer/Footer.module.css";

const NavItem = (props) => {
  return (
    <>
      <li className={styles.navItem}>
        <h3>{props.name}</h3>
        <ul>
          {props.children}
          {/* <li>
            <Link href="/" className={styles.linkTitle}>
              trends
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.linkTitle}>
              brands
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.linkTitle}>
              lanceringen
            </Link>
          </li> */}
        </ul>
      </li>
    </>
  );
};

export default NavItem;
