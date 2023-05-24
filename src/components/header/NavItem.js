import styles from "@/styles/components/header/NavItem.module.css";

import Link from "next/link";

const NavItem = ({ linkUrl, title, children }) => {
    return (
        <>
            <li className={styles.navItem}>
                <Link href={linkUrl}>{title}</Link>
                {children}
            </li>
        </>
    )
}

export default NavItem;