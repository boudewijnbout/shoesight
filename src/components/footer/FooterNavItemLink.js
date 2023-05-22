import Link from "next/link";
import styles from "../../styles/components/footer/Footer.module.css";

const FooterNavItemLink = (props) => {
  return (
    <li>
      <Link href={props.link} className={styles.linkTitle}>
        {props.name}
      </Link>
    </li>
  );
};

export default FooterNavItemLink;
